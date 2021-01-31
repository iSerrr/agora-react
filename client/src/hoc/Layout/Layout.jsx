import React, {Component, useContext, useState} from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'

import {BottomNavigationAction, BottomNavigation, Badge} from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import PersonIcon from '@material-ui/icons/Person'

import Header from '../../containers/Header/Header'
import classes from './Layout.module.scss'
import Footer from '../../containers/Footer/Footer'
import AccordionMenu from '../../components/nav/AccordionMenu/AccordionMenu'
import NavBar from '../../containers/Footer/NavBar/NavBar'
import {MenuContext} from '../../App'


const Layout = props => {

    const {menuIsOpen, toggleMenu} = useContext(MenuContext)

    const [value, setValue] = useState(0)
    const [menuActive, setMenuActive] = useState(false)

    const isMobile = useMediaQuery('(max-width:480px)')
    let history = useHistory()

    const toggleMenuHandle = () => {
        setMenuActive(!menuActive)
    }

    const navi = path => {
        history.push(path)
    }

    return (
        <>
            {isMobile && <AccordionMenu/>}
            {!isMobile && <Header/>}
            <main className={[classes.LayoutMain, menuIsOpen ? classes.active : null].join(' ')}>
                {isMobile && <Header/>}
                <div
                    onClick={toggleMenu}
                    className={[classes.hideMenu, menuIsOpen ? classes.active : null].join(' ')}
                />
                {props.children}
                {isMobile && (
                    <BottomNavigation
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue)
                            navi(newValue)
                        }}
                        showLabels
                        className={classes.BottomNavigation}
                    >
                        <BottomNavigationAction value={'/'}
                                                label="Home"
                                                icon={<HomeIcon/>}/>

                        <BottomNavigationAction value={'/cart'}
                                                label="Cart"
                                                icon={
                                                    <Badge badgeContent={0}
                                                           color="secondary"><ShoppingCartIcon/>
                                                    </Badge>}/>

                        <BottomNavigationAction value={'/account'}
                                                label="Account"
                                                icon={<PersonIcon/>}/>
                    </BottomNavigation>
                )}
            </main>
            <Footer/>
        </>
    )
}

export default Layout