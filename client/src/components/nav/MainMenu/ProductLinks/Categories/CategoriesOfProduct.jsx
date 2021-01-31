import React, {useContext} from 'react'
import classes from './CategoriesOfProduct.module.scss'
import {NavLink} from "react-router-dom";
import {MenuContext} from '../../../../../App'

const CategoriesOfProduct = ({title, links}) => {
    const {toggleMenu} = useContext(MenuContext)

    const renderList = () => (
        links.map((item, index) => (
            <li
                key={index}
                onClick={toggleMenu}
            >
                <NavLink to={`/catalogue/${title}/${item}`}>
                    {item}
                </NavLink>
            </li>
        ))
    )
    return (
        < ul
            className={classes.ProductCatalogList}>
            <NavLink
                to={`/catalogue/${title}/all`}
                onClick={toggleMenu}
                >
                <h3>{title}</h3>
            </NavLink>
            {renderList()}
        </ul>
    )
}

export default CategoriesOfProduct;