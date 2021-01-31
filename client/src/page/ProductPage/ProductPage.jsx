import React, {useEffect} from 'react'
import {useLocation} from 'react-router-dom'

import Product from '../../containers/Product/Product'
import PopularProducts from '../../components/PopularProducts/PopularProducts'


const ProductPage = props => {

    const {pathname} = useLocation()

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [pathname])

    return (
        <>
            <Product productId={props.match.params.id}/>
            <PopularProducts productId={props.match.params.id}/>
        </>
    )
}

export default ProductPage