import React, {useContext} from 'react'
import classes from './GeneralList.module.scss'
import {NavLink} from 'react-router-dom'
import {MenuContext} from '../../../../App'

const list = [
    {label: 'About Us', path: '/about-us'},
    {label: 'Careers', path: '/careers'},
    {label: 'Service', path: '/services'},
    {label: 'Order status', path: '/order-status'},
    {label: 'Contact Us', path: '/contacts'},
    {label: 'Payment', path: '/payment'}
]

const GeneralList = () => {

    const {toggleMenu} = useContext(MenuContext)

    const renderLinksList = () => list.map((link, index) => (
        <li
            key={index}
            onClick={toggleMenu}
        >
            <NavLink to={link.path}>
                {link.label}
            </NavLink>
        </li>
    ))

    return (
        <ul className={classes.GeneralList}>
            {renderLinksList()}
        </ul>
    )
}

export default GeneralList