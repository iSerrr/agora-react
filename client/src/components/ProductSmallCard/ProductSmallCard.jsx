import React from 'react'
import PropTypes from 'prop-types'

import './ProductSmallCard.scss'
import Loader from '../generic/Loader/Loader'
import {NavLink} from 'react-router-dom'

const ProductSmallCard = ({product}) => {

    const getImgUrl = () => {
        return (`/images/product/${product.id}/${product.options.colors[0]}/1.webp`)
    }

    return (
        <NavLink to={`/product/${product?.id}`}>
            <div className='product-small-card'>
                <div className="product-small-card__content">
                    {Object.keys(product).length === 0 ? <Loader/> : (
                        <>
                            <p className="product-small-card__style">{product.style}</p>
                            <div className="product-small-card__img-box">
                                <img src={getImgUrl()} alt="" className="product-small-card__img"/>
                            </div>
                            <button className="product-small-card__buy">Buy</button>
                            <div className="product-small-card__desc">
                                <p className="product-small-card__title">{product.title}</p>
                                <p className="product-small-card__price">{product.price}$</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </NavLink>
    )
}

ProductSmallCard.defaultProps = {
    product: {}
}

ProductSmallCard.propTypes = {
    product: PropTypes.object.isRequired
}

export default React.memo(ProductSmallCard)