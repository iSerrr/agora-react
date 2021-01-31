import React, {useContext, useState} from 'react'
import {useLocation} from 'react-router-dom'

import classes from './Header.module.css'
import Slider from '../../components/Slider/Slider'
import HeaderNavBar from '../../components/HeaderNavBar/HeaderNavBar'
import MainMenu from '../../components/nav/MainMenu/MainMenu'
import {MediaQueryContext} from '../../App'

const Header = props => {

    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const path = useLocation().pathname
    const {isMobile} = useContext(MediaQueryContext)

    const toggleMenu = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    return (
        <header className={classes.Header}>
            <HeaderNavBar/>
            {!isMobile && <MainMenu/>}
            {
                path === '/' && !isMobile
                    ? <Slider autoPlayInterval={8000}/>
                    : null
            }
        </header>
    )
}


export default Header