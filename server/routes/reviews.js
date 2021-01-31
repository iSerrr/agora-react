import express from 'express'
import path from 'path'

import randomNumberArray from '../helpers/randomNumberArray'
import createProductPack from '../helpers/createProductPack'

const router = express.Router();

//! ---< Response reviews >---
router.get('/', (req, res) => {
    const start = Date.now()
    createProductPack(req.query.productId)
        .then(data => {
            res.status(200)
            res.setHeader('Cache-Control', 'no-cache')
            res.json(data)
            const end = Date.now()
            console.log('\x1b[36m%s', `${req.method} ${req.url} ${end - start} ms ---`)
        })
        .catch(err => {
            console.log(err)
            res.send(err)
        })
})

export default router