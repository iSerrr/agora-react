import React, {useEffect, useState} from 'react'
import axios from 'axios'
import ProductSmallCard from '../ProductSmallCard/ProductSmallCard'


import classes from './PopularProducts.module.css'

const PopularProducts = ({productId}) => {
    const [products, setProducts] = useState([])
    const [fetchingDb, setFetchingDb] = useState(false)

    const fetchFromDb = (selectedProductId) => {
        axios.get(`/api/products/popular/${selectedProductId}`)
            .then(({data}) => setProducts(data))
    }

    useEffect(() => {
        if (fetchingDb) fetchFromDb(productId)
        !fetchingDb && setFetchingDb(true)
    }, [productId, fetchingDb])

    const getRenderPopularProducts = () => {
        return products.map(product => (
            <li
                key={product.id}
                className={classes.item}>
                <ProductSmallCard product={product}/>
            </li>

        ))
    }

    return (
        <>
            {
                (products.length !== 0)
                    ? <ul className={classes.ProductList}>{getRenderPopularProducts()}</ul>
                    : null
            }
        </>
    )

}

export default React.memo(PopularProducts)