import express from 'express'
import path from 'path'
import fs from 'fs'

import randomNumberArray from '../helpers/randomNumberArray'

const router = express.Router();

//! ---< Declaration path to DB >---
const pathJoin = path.join(__dirname, '../db.json')

//! ---< Response all categories >---
router.get('/', (req, res) => {
    const start = Date.now()
    fs.readFile(pathJoin, 'utf-8', (error, data) => {
        if (error) console.log(error)
        res.json(JSON.parse(data).categories)
        const end = Date.now()
        console.log('\x1b[36m%s', `${req.method} ${req.url} ${end - start} ms ---`)
    })
})

export default router