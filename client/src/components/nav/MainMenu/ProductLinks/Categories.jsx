import React, {useEffect, useState} from 'react'
import classes from './Categories.module.scss'
import axios from 'axios'

import CategoriesOfProduct from './Categories/CategoriesOfProduct'

const Categories = () => {

    const [categories, setCategories] = useState([])
    const [fetching, setFetching] = useState(false)

    useEffect(() => {
        if (fetching) {
            axios.get('/api/categories')
                .then(({data}) => setCategories(data))
        }
        !fetching && setFetching(true)
    }, [fetching])

    const renderList = () => (
        categories.map((item, index) => (
            <CategoriesOfProduct
                key={index}
                title={item.name}
                links={item.styles}
            />
        ))
    )
    return (
        <div className={classes.ProductCatalogsList}>
            {renderList()}
        </div>
    )
}

export default React.memo(Categories)