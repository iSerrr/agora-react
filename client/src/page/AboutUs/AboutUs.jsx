import React, {Component} from 'react'
import classes from './AboutUs.module.css'
import {light} from '@material-ui/core/styles/createPalette'

const arrayTest = (max) => {
    const res = []
    for (let i = 1 ; i <= max ; i++) {
        res.push(i)
    }
    return res
}


const createButtonList = () => arrayTest(18).map((item, index) => (
    <li
        className={[classes.paginationButton, item === 15 ? classes.currently : null].join(' ')}
        key={index}>
        {item}
    </li>
))


const AboutUs = () => {

    return (
        <div className={classes.AboutUs}>
            <ul className={classes.pagination}>
                {createButtonList()}
            </ul>

            <h1>About Us</h1>
        </div>
    )
}

export default AboutUs