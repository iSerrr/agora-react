import React from 'react'
import classes from './ProductCatalugue.module.css'
import CreateRandomNumbers from '../../lib/CreateRandomNumbers'
import ProductSmallCard from '../../components/ProductSmallCard/ProductSmallCard'

const ProductCatalog = ({products}) => {
    const renderProductList = () => (
        products.map((product) => (

            <li key={product.id}>
                <ProductSmallCard product={product}/>
            </li>
        ))
    )
    return (
        <ul className={classes.CatalogueProductList}>
            {renderProductList()}
        </ul>
    )
}

export default ProductCatalog