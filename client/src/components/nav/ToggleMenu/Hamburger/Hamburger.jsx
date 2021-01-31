import React from 'react';
import classes from './Hamburger.module.scss'

const Hamburger = ({isActive}) => (
    <div className={[classes.hamburger, classes['hamburger--collapse'],  isActive ? classes['is-active']:null].join(' ')}>
        <div className={classes['hamburger-box']}>
            <div className={classes['hamburger-inner']}/>
        </div>
    </div>
)

export default Hamburger;