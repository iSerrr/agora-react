import React, {useState, useEffect} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import classes from './Price.module.css'
import Slider from '@material-ui/core/Slider'

export default function RangeSlider({action}) {

    const [value, setValue] = useState([0, 500])

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const changePrice = (event, newPrice) => {
        action(newPrice)
    }

    return (
        <div className={classes.Price}>
            <ul className={classes.label}>
                {value.map((price, index) => (
                    <li
                        key={index}
                        className={classes.item}>{price}</li>
                ))
                }
            </ul>
            <Slider
                step={5}
                max={500}
                value={value}
                onChangeCommitted={changePrice}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
            />
        </div>
    )
}