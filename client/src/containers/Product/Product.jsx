import React, {useState, useEffect} from 'react'
import axios from 'axios'

import classes from './Product.module.css'

import ProductSlider from './ProductSlider/ProductSlider'
import ProductDescription from './ProductDescription/ProductDescription'
import ProductReviews from './ProductReviews/ProductReviews'
import ProductReviewsAssessment from './ProductReviewsAssessment/ProductReviewsAssessment'
import Loader from '../../components/generic/Loader/Loader'

const Product = ({productId}) => {

    const [currentVariant, setCurrentVariant] = useState(0)
    const [product, setProduct] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [error, setError] = useState(null)
    const [reviews, setReviews] = useState([])
    const [totalRatting, setTotalRatting] = useState([])

    const fetchProductFromDb = (productId) => {
        axios.get(`/api/reviews/?productId=${productId}`)
            .then(({data}) => {
                setProduct(data.product)
                setReviews(data.reviews)
                setTotalRatting(data.totalRatting)
                setIsLoaded(true)
            })
            .catch(err => {
                setIsLoaded(true)
                setError(err.message)
            })
    }

    useEffect(() => {
        fetchProductFromDb(productId)
    }, [productId])

    const onChangeColorHandle = color => {
        setCurrentVariant(color)
    }

    const avarageRatting = () => {
        return Math.floor(totalRatting.reduce((sum, item) => {
            return sum + item
        }, 0) / totalRatting.length)
    }

    const getCurrentVariant = () => {
        return product.options.colors[currentVariant]
    }

    return (
        <>
            {(error)
                ? <h1>{error}</h1>
                : (!isLoaded)
                    ? <Loader/>
                    : (
                        <div className={classes.Product}>
                            <div className={classes.row}>
                                <div className={classes.column}>
                                    <ProductDescription
                                        product={product}
                                        onChangeColor={onChangeColorHandle}
                                        ratting={{
                                            avarageRatting: avarageRatting(),
                                            allRatings: totalRatting.length
                                        }}

                                    />
                                </div>
                                <div className={classes.column}>
                                    <ProductSlider
                                        product={{...product, variant: getCurrentVariant()}}
                                    />
                                </div>
                            </div>
                            <div className={classes.row}>
                                <div className={classes.reviewsList}>
                                    <ProductReviews reviews={reviews}/>
                                </div>
                                <div className={classes.reviewsAssessment}>
                                    <ProductReviewsAssessment ratting={totalRatting}/>
                                </div>
                            </div>
                        </div>
                    )
            }
        </>)
}

export default Product