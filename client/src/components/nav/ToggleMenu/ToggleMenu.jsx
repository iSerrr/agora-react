import React, {useContext} from 'react'
import classes from './ToggleMenu.module.scss'
import Hamburger from './Hamburger/Hamburger'
import {MenuContext} from '../../../App'

const ToggleMenu = () => {
    const {toggleMenu, menuIsOpen} = useContext(MenuContext)

    return (
        <div
            className={classes.MenuToggle}
            onClick={toggleMenu}
        >
            <Hamburger isActive={menuIsOpen}/>
            <span>Menu</span>
        </div>
    )
}

export default ToggleMenu