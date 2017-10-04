import merge from 'webpack-merge'
import devEnv from './dev.env'

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  db: {
    db: process.env.DB_NAME || 'testing',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 28015,
    createDatabase: true,
    init: process.env.DB_INIT === 'true' || true
  },
  seed: '/seeds/base/db-seed.js'
})
