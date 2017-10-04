import config from '../config'
var thinky = require('thinky')(config.db)
var { type, r } = thinky

function init () {
  return new Promise((resolve, reject) => {
    thinky.dbReady().then(() => {
      resolve(thinky)
    })
  })
}

export { init, thinky, type, r }
