module.exports = {
  NODE_ENV: '"development"',
  WEB_HOST: (process.env.WEB_HOST || 'http://localhost:8081'),
  host: 'localhost',
  port: '3000',
  db: {
    name: process.env.DB_NAME || 'trwip-dev',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 28015
  },
  secret: 'bora ver de qual eh essa treta'
}
