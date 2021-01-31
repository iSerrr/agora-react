import express from 'express'
import path from 'path'
import fs from 'fs'

import randomNumberArray from '../helpers/randomNumberArray'
import collectionInfoAboutProducts from '../helpers/collectionInfoAboutProducts'
import conditionString from '../helpers/conditionString'
import sliceForPagination from '../helpers/sliceForPagination'

const router = express.Router();

//! ---< Declaration path to DB >---
const pathJoin = path.join(__dirname, '../db.json')

//! ---< Response same popular products to specific ID >---
router.get('/popular/:id', (req, res) => {
    const start = new Date().getTime()
    fs.readFile(pathJoin, 'utf-8', (error, data) => {
        if (error) console.log(error)
        const selectedProductId = req.params.id
        const products = JSON.parse(data).products
        res.json(randomNumberArray(products.length, 9)
            .map(number => products[number].id !== selectedProductId ? products[number] : null)
            .filter(product => product)
            .slice(0, 8)
        )
        const end = Date.now()
        console.log('\x1b[36m%s', `${req.method} ${req.url} ${end - start} ms ---`)
    })
})

//! ---< Response products for catalogue >---
router.get('/catalogue', (req, res) => {

    fs.readFile(pathJoin, 'utf-8', (error, data) => {
        if (error) console.log(error)
        const start = Date.now()
        const filters = JSON.parse(req.query.filters)
        const products = JSON.parse(data).products

        collectionInfoAboutProducts(products, 'style')

        const result = JSON.parse(data).products.filter(product => {
                return (
                    conditionString(filters.category, product.category) &&
                    conditionString(filters.style, [product.style]) &&
                    conditionString(filters.brand, product.brand) &&
                    conditionString(filters.size, product.options.sizes) &&
                    conditionString(filters.color, product.options.colors) &&
                    filters.price[0] < product.price &&
                    filters.price[1] > product.price
                )
            }
        )
        setTimeout(() => {
            console.log('quan' + filters.showQuantity)
            res.json({products: sliceForPagination(result, filters.currentPage, filters.showQuantity), total:result.length})
        }, Math.floor(Math.random() * 1500))


        const end = Date.now()
        console.log('\x1b[36m%s', `${req.method} ${req.url} ${end - start} ms ---`)
    })
})

export default router