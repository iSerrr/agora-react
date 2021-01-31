import React, {useState, useEffect} from 'react'
import axios from 'axios'
import handleSort from '../../lib/handleSort'

import classes from './Catalogue.module.css'

import withFilter from './filtres/FilterLayout'
import Color from './filtres/Color/Color'
import Size from './filtres/Size/Size'
import Price from './filtres/Price/Price'
import Style from './filtres/Style/Style'
import Sorting from './Sorting/Sorting'
import Shows from './Shows/Shows'

import ProductCatalog from '../../containers/ProductCatalugue/CatalogueProductList'
import ProductMiddleCard from '../../components/ProductMiddleCard/ProductMiddleCard'

import searchListForSelectedCategory from '../../lib/searchListForSelectedCategory'
import Pagination from './Pagination/Pagination'

const FilterWithSizes = withFilter(Size)
const FilterWithColors = withFilter(Color)
const FilterWithPrice = withFilter(Price)
const FilterWithStyle = withFilter(Style)

const Catalogue = props => {

    const initialFilterOptions = {
        category: props.match.params.category,
        style: props.match.params.style === 'all' ? [] : props.match.params.style,
        brand: [],
        color: [],
        size: [],
        price: [0, 500],
    }

    const [catalogueIsLoad, setCatalogueIsLoad] = useState(false)
    const [showQuantity, setShowQuantity] = useState(9)
    const [currentPage, setCurrentPage] = useState(1)
    const [filterOptions, setFilterOptions] = useState(initialFilterOptions)
    const [sortOptions, setSortOptions] = useState('Brand A-Z')
    const [products, setProducts] = useState([])
    const [total, setTotal] = useState(0)
    const [options, setOptions] = useState({})

    const fetchToDb = () => {
        axios.get('/api/products/catalogue', {
            params: {
                filters: JSON.stringify(
                    {
                        ...filterOptions,
                        showQuantity,
                        currentPage,
                    }
                )
            }
        })
            .then(({data}) => {
                setProducts(data.products)
                return data
            })
            .then(data => setTotal(data.total))
    }

    const changeFilterOption = ({option, value}) => {
        setFilterOptions({...filterOptions, [option]: value})
    }

    const applyFilter = () => fetchToDb()

    const changeSortOptions = (value) => setSortOptions(value)
    const changeShowsOptions = (value) => setShowQuantity(value)
    const handleChangePage = (value) => setCurrentPage(value)
    const quantityPaginationPage = Math.ceil(total / showQuantity)

    useEffect(() => {
        fetchToDb()
    }, [])

    useEffect(() => {
        axios.get('/api/options')
            .then(({data}) => {
                setOptions(data)
            })
    }, [])

    useEffect(() => {
        setFilterOptions(initialFilterOptions)
    }, [props.match.params.category, props.match.params.style])

    useEffect(() => {
        applyFilter()
    }, [props])

    useEffect(() => {
        if (catalogueIsLoad) {
            setProducts([])
            fetchToDb()
        }
        setCatalogueIsLoad(true)
    }, [showQuantity, currentPage, sortOptions])

    return (
        <div className={classes.Catalogue}>
            <div className={classes.header}>
                <ProductMiddleCard/>
                <ul className={classes.optionsBar}>
                    <li className={classes.optionsItem}>
                        <h3 className={classes.filterTitle}>Filter</h3>
                        <button
                            onClick={applyFilter}
                            className={classes.filterReset}>
                            <i className={'icon-refresh'}/>
                        </button>
                    </li>
                    <li className={classes.optionsItem}>
                        <Sorting condition={changeSortOptions}/>
                    </li>
                    <li className={classes.optionsItem}>
                        <Shows condition={changeShowsOptions}/>
                    </li>
                    <li className={classes.optionsItem}></li>
                </ul>
            </div>


            <div className={classes.FilterConteiner}>
                {Object.keys(options).length !== 0 && (
                    <>
                        <FilterWithStyle
                            previousOption={filterOptions.style}
                            type={'style'}
                            list={searchListForSelectedCategory(filterOptions.category, options)}
                            changeOptions={changeFilterOption}
                        />
                        <FilterWithPrice
                            type={'price'}
                            list={null}
                            changeOptions={changeFilterOption}
                        />
                        <FilterWithColors
                            type={'color'}
                            list={options.options.color}
                            changeOptions={changeFilterOption}
                        />
                        <FilterWithSizes
                            type={'size'}
                            list={options.options.size[filterOptions.category]}
                            changeOptions={changeFilterOption}
                        />
                    </>
                )
                }
            </div>

            <div className={classes.ProductConteiner}>
                {products.length !== 0 && <ProductCatalog products={handleSort(products, sortOptions)}/>}
                <div className={classes.paginationWrapper}>
                    <Pagination handleChangePage={handleChangePage} quantity={quantityPaginationPage}/>
                </div>

            </div>

        </div>
    )
}

export default Catalogue