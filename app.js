require('envkey')
const axios = require('axios')
const Entities = require('html-entities').XmlEntities
const fs = require('fs')
const is = require('typa')
const Mastodon = require('mastodon-api')
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
      data = data.data
      data = tabletojson.convert(data, {
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
        console.log(`ext: ${ext}`)
      } else {
        return null
      }

      if (is.str(ext)) {
        console.log(`img_in: ${img}`)
        img = img
          .replace(/thumb\//g, '')
          .replace(/(\/\d*px-)/g, '/')
          .replace(/\/[a-zA-Z0-9%$!#^&()_.-]*.{3}$/, '')
        console.log(`img_out: ${img}`)

        filename = `./img/${img.replace(/\/|\./g, '_')}.${ext}`
        if (fs.exists(filename)) return filename

        return axios({
          responseType: 'stream',
          url: `https://${img}`,
          method: 'get'
        }).then(response => {
          response.data.pipe(fs.createWriteStream(filename))
          console.log(`filename: ${filename}`)
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

// generate post
async function post(soups, sandwiches) {
  // console.log('Creating post')
  const [soup, soupImg] = getFood(soups)
  const [sand, sandImg] = getFood(sandwiches)
  const imgIn = [soupImg, sandImg]
  const imgOut = await Promise.all([getImg(imgIn[0]), getImg(imgIn[1])])
  // console.log(`imgOut: ${imgOut}`)

  const status = `🥣  ${striptags(
    entities.decode(soup.Name).replace(/\[.*\]/, '')
  )} ${
    is.bad(soup.Origin)
      ? ''
      : '[' +
        striptags(entities.decode(soup.Origin).replace(/\[.*\]/, '')) +
        ']'
  } n' 🥪  ${striptags(entities.decode(sand.Name).replace(/\[.*\]/, ''))} ${
    is.bad(sand.Origin)
      ? ''
      : '[' +
        striptags(entities.decode(sand.Origin).replace(/\[.*\]/, '')) +
        ']'
  }`
  console.log(`status: ${status}`)

  // const res = await M.post('statuses', { status })
  // if (/error/.test(res.data)) console.log(res.data)
  // setTimeout(async () => {
  //   await post()
  // }, 3600000)
}

;(async () => {
  const [soups, sandwiches] = await warmUp()
  await post(soups, sandwiches)
})()
