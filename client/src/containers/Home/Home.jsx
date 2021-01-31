import React, {useContext} from 'react'
import {MediaQueryContext} from '../../App'
import classes from './Home.module.css'

import PreferenceList from '../../components/PreferenceList/PreferenceList'
import PopularProducts from '../../components/PopularProducts/PopularProducts'

const Home = () => {

    const {isMobile} = useContext(MediaQueryContext)
    return (
        isMobile
            ? (
                <div className={classes.Home}>
                    <div className={classes.hotOfer}>
                        75x55
                    </div>
                    <div className={classes.mc50}>50x50</div>
                    <div className={classes.mc50}>50x50</div>
                </div>
            )
            : (
                <div className={classes.Home}>
                    <PreferenceList/>
                    <PopularProducts/>
                </div>
            )
    )
}

export default Home