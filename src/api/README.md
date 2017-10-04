Exemplo de API
======

```js
import { Router } from 'express'
import Tag from '../models/tag'

export default ({ config, db }) => {
  let router = Router()

  router.param('tag', (req, resp, next, id) => {
    req.tag = Tag.get(id)
    next()
  })

  router.get('/', async ({ params }, res) => {
    try {
      res.json(await Tag.run())
    } catch (err) {
      res.status(404).json({ error: err.name })
    }
  })

  router.get('/:tag', async ({ tag }, res) => {
    try {
      res.json(await tag)
    } catch (err) {
      res.status(404).json({ error: err.name })
    }
  })

  router.post('/', async ({ body }, res) => {
    try {
      res.json(await Tag.save(body.tag))
    } catch (err) {
      res.status(404).json({ error: err.name })
    }
  })

  router.put('/:tag', async ({ tag, body }, res) => {
    try {
      let doc = await tag
      res.json(await doc.merge(body.tag).save())
    } catch (err) {
      res.status(404).json({ error: err.name })
    }
  })

  router.delete('/:tag', async ({ tag }, res) => {
    try {
      res.json(await tag.delete())
    } catch (err) {
      res.status(404).json({ error: err.name })
    }
  })

  return router
}
```
