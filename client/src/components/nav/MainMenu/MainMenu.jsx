import React, {useContext} from 'react'
import classes from './MainMenu.module.scss'

import GeneralList from './GeneralList/GeneralList'
import ContactsList from './Contacts/Contacts'
import Categories from './ProductLinks/Categories'

import {MenuContext} from '../../../App'

const MainMenu = props => {

    const {menuIsOpen} = useContext(MenuContext)

    const cls = [classes.MainMenu, menuIsOpen ? classes['open'] : null]
    return (
        <div
            className={cls.join(' ')}
        >
            <Categories
                menuToggle={props.onMenuToggle}
            />
            <ContactsList/>
            <GeneralList
                onMenuToggle={props.onMenuToggle}
            />
        </div>
    )
}

export default React.memo(MainMenu)