import { Router } from 'express'
import multer from 'multer'
import uuid from 'uuid'
import path from 'path'

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
    cb(null, uuid.v4() + path.extname(file.originalname))
  }
})
var upload = multer({ storage: storage })

export default ({ config, db }) => {
  let router = Router()
  router.post('/', upload.single('file'), async (req, res) => {
    console.log(req.file)
    if (req.file) {
      var status = { error: null, path: req.file.path }
      res.status(200).json(status)
      return status
    } else {
      res.status(400).json({ error: 'Upload de imagem falhou' })
      throw Error('Upload de imagem falhou')
    }
  })

  return router
}
