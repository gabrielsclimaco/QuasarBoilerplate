import { version } from '../../package.json'
import { Router } from 'express'
import imageUploadRouter from './imageUpload'

export default ({ config, db }) => {
  let api = Router()

  // Add model routes
  api.use('/image-upload', imageUploadRouter({ config, db }))

  api.get('/', (req, res) => {
    res.json({ version })
  })

  return api
}
