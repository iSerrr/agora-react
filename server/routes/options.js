import express from 'express'
import path from 'path'
import fs from 'fs'

import collectionInfoAboutProducts from '../helpers/collectionInfoAboutProducts'

const router = express.Router();

//! ---< Declaration path to DB >---
const pathJoin = path.join(__dirname, '../db.json')

//! ---< Response all options >---
router.get('/', (req, res) => {
    fs.readFile(pathJoin, 'utf-8', (error, data) => {
        if (error) console.log(error)
        const inData = JSON.parse(data)

        const outData = {
            options: inData.options,
            categories: inData.categories,
            ...collectionInfoAboutProducts(inData.products, 'style')
        }
        res.json(outData)
    })
})

export default router