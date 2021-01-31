import React, {useContext} from 'react'

import classes from './HeaderNavBar.module.scss'
import ToggleMenu from '../nav/ToggleMenu/ToggleMenu'
import {NavLink} from 'react-router-dom'

import useMediaQuery from '@material-ui/core/useMediaQuery'
import IconButton from '@material-ui/core/IconButton'
import {Search, FavoriteBorder, AddShoppingCart} from '@material-ui/icons'
import {Badge} from '@material-ui/core'

const HeaderNavBar = props => {
    const isMobile = useMediaQuery('(max-width:480px)')

    return (
        <div className={classes.HeaderNavBar}>
            {!isMobile
                ? (
                    <>
                        <div>
                            <NavLink className={classes.link} to={'/'}>
                                <IconButton color="primary" aria-label="add to shopping cart">
                                    <Search style={{fontSize: '30px', color: '#fff'}}/>
                                </IconButton>
                            </NavLink>
                            <ToggleMenu/>
                        </div>
                        <div>
                            <NavLink className={classes.link} to={'/'}>
                                <IconButton color="primary" aria-label="add to shopping cart">
                                    <Badge badgeContent={4} color="primary">
                                        <FavoriteBorder style={{fontSize: '30px', color: '#fff'}}/>
                                    </Badge>
                                </IconButton>
                            </NavLink>
                            <NavLink className={classes.link} to={'/'}>
                                <IconButton color="primary" aria-label="add to shopping cart">
                                    <Badge badgeContent={1} color="primary">
                                        <AddShoppingCart style={{fontSize: '30px', color: '#fff'}}/>
                                    </Badge>
                                </IconButton>
                            </NavLink>
                        </div>
                        <p className={classes.logo}>AGORA</p>
                    </>
                )
                : (
                    <div>

                        <ToggleMenu
                            menuIsOpen={props.menuIsOpen}
                            toggleMenu={props.toggleMenu}
                        />
                    </div>
                )
            }
        </div>
    )
}

export default HeaderNavBar