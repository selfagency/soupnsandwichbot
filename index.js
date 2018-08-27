require('now-env')

const axios = require('axios')
const Entities = require('html-entities').XmlEntities
const fs = require('fs')
const is = require('typa')
const Mastodon = require('mastodon-api')
const sleep = require('await-sleep')
const striptags = require('striptags')
const tabletojson = require('tabletojson')

// initialize html entity converter
const entities = new Entities()

// initialize mastodon api
const M = new Mastodon({
  access_token: process.env.ACCESS_TOKEN,
  api_url: 'https://bofa.lol/api/v1/'
})

// download convert html table to json
function tab2json(url) {
  try {
    return new Promise(async (resolve, reject) => {
      let data = await axios.get(url)
      data = tabletojson.convert(data.data, {
        stripHtmlFromCells: false,
        stripHtmlFromHeadings: true
      })
      if (/error/.test(data)) reject(data)
      resolve(data[0])
    })
  } catch (err) {
    throw err
  }
}

// initialize bot
async function warmUp() {
  // console.log('Getting soups and sandwiches')
  try {
    return Promise.all([
      await tab2json('https://en.wikipedia.org/wiki/List_of_soups'),
      await tab2json('https://en.wikipedia.org/wiki/List_of_sandwiches')
    ])
  } catch (err) {
    throw err
  }
}

// get random food item
function getFood(food) {
  // console.log('Getting food item')
  const urlRegex = new RegExp(/(?:src=\"\/\/)(.*?)(?:\")/g)
  try {
    const item = food[Math.floor(Math.random() * food.length)]
    const img = urlRegex.exec(item.Image)
    return [item, !is.bad(img) ? img[1] : null]
  } catch (err) {
    throw err
  }
}

// get image for food item
async function getImg(img) {
  try {
    const extRegex = new RegExp(/(?:\.)([0-9a-z]+$)/)
    let ext, filename

    // console.log(`img: ${img}`)
    if (is.str(img)) {
      ext = extRegex.exec(img)

      if (!is.bad(ext)) {
        ext = ext[1].toLowerCase()
        // console.log(`ext: ${ext}`)
      } else {
        return null
      }

      if (is.str(ext)) {
        // console.log(`img_in: ${img}`)
        img = img
          .replace(/thumb\//g, '')
          .replace(/(\/\d*px-)/g, '/')
          .replace(/\/[a-zA-Z0-9%$!#^&()_.-]*.{3,4}$/, '')
        // console.log(`img_out: ${img}`)
        filename = `/tmp/${img.replace(/\/|\./g, '_')}.${ext}`
        if (fs.existsSync(filename)) return filename

        return axios({
          responseType: 'stream',
          url: `https://${img}`,
          method: 'get'
        }).then(response => {
          // console.log(`filename: ${typeof filename} ${filename}`)
          response.data.pipe(fs.createWriteStream(filename))
          return filename
        })
      } else {
        return null
      }
    } else {
      return null
    }
  } catch (err) {
    throw err
  }
}

// upload media
async function upload(imgs) {
  let out = []
  try {
    for (let i = 0; i <= imgs.length; i++) {
      if (i === imgs.length) return out
      const img = imgs[i]
      // console.log(`stream: ${img}`)

      if (!is.bad(img)) {
        // console.log(`file exists: ${fs.existsSync(img)}`)
        const res = await M.post('media', {
          file: fs.createReadStream(img)
        })
        // console.log(JSON.stringify(res.data))
        if (/missing/g.test(res.data.url)) {
          out.push(undefined)
        } else {
          out.push(res.data.id)
        }
      }
    }
  } catch (err) {
    throw err
  }
}

// filter text
function txtFilter(text) {
  return striptags(
    entities
      .decode(text)
      .replace(/\[.*\]/, '')
      .replace(/\n/, '')
  )
}

// generate post
async function post(soups, sandwiches) {
  try {
    // console.log('Creating post')
    const [soup, soupImg] = getFood(soups)
    const [sand, sandImg] = getFood(sandwiches)
    const imgIn = [soupImg, sandImg]
    const imgOut = await Promise.all([getImg(imgIn[0]), getImg(imgIn[1])])
    await sleep(5000)
    // console.log(`imgOut: ${imgOut}`)
    const media_ids = await upload(imgOut)
    await sleep(5000)
    // console.log(`media_ids: ${media_ids}`)

    const status = `🥣  ${txtFilter(soup.Name)}${
      is.bad(soup.Origin) ? '' : ' [' + txtFilter(soup.Origin) + ']'
    } n' 🥪  ${txtFilter(sand.Name)}${
      is.bad(sand.Origin) ? '' : ' [' + txtFilter(sand.Origin) + ']'
    }`

    const res = await M.post('statuses', { status, media_ids })
    if (/error/.test(res.data))
      // console.log(res.data)
      return status
  } catch (err) {
    throw err
  }
}

// function
module.exports = async (req, res) => {
  try {
    const [soups, sandwiches] = await warmUp()
    const status = await post(soups, sandwiches)
    res.end(`${status}`)
  } catch (err) {
    res.end(`${err}`)
    throw err
  }
}
