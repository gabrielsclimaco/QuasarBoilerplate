module.exports = {
  NODE_ENV: '"production"',
  WEB_HOST: (process.env.WEB_HOST || 'http://frontend'),
  host: 'localhost',
  port: '3000',
  db: {
    name: process.env.DB_NAME || 'trwip-prod',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 28015
  },
  secret: '6f6b32a97bfdc5ac3112d782b5a5d7bc7d198e08'
}
