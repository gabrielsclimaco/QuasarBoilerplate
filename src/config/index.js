var env = require('./test.env')

if (process.env.NODE_ENV === 'production') {
  env = require('./prod.env')
} else if (process.env.NODE_ENV === 'development') {
  env = require('./dev.env')
}

export default env
