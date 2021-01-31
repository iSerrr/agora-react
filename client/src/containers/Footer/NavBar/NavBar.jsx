import React from 'react'
import PropTypes from 'prop-types'

import classes from './NavBar.module.css'

const NavBar = props => {
    return (
        <nav className={classes.NavBar}>
            <ul>
                <li>
                    <span>
                        <i className='icon-Shape_86'/>
                        <p>Home</p>
                    </span>
                </li>
                <li>
                     <span>
                        <i className='icon-Shape_86'/>
                        <p>Home</p>
                     </span>
                </li>
                <li>
                    <span>
                        <i className='icon-Shape_86'/>
                        <p>Home</p>
                    </span>
                </li>
                <li>
                     <span>
                         <i className='icon-Shape_86'/>
                         <p>Home</p>
                     </span>
                </li>
                <li>
                     <span>
                         <i className='icon-Shape_86'/>
                         <p>Home</p>
                     </span>
                </li>
            </ul>
        </nav>
    )
}

NavBar.propTypes = {}

export default NavBar