import fs from 'fs'
import path from "path"
//! ---< Declaration path to DB >---
const pathJoin = path.join(__dirname, '../db.json')

//! ---< Create ProductPack from specific ID >---
export default async (productId) => {

    let productPack = new Promise((res, rej) => {

        fs.readFile(pathJoin, 'utf-8', (error, data) => {
            if (error) rej(error)
            const {products, reviews, users} = JSON.parse(data)
            let resProduct = {}
            let resReviews = []
            let resRatting = []

            products.map(product => {
                product.id === productId && (resProduct = product)
            })

            resReviews = reviews
                .filter(review => review['productid'] === productId)
                .map(review => {
                    resRatting = [...resRatting, review.star]
                    let fullName = ''
                    users.map(user => {
                        if (user.id === review.userid) fullName = [user.firstName, user.lastName].join(' ')
                    })
                    return {...review, fullName}
                })

            res(
                {
                    product: resProduct,
                    reviews: resReviews,
                    totalRatting: resRatting
                }
            )
        })
    })
    return await productPack
}