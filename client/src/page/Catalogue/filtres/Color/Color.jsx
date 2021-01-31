import React from 'react'
import classes from './Color.module.css'

const Color = props => {
    const {list, action} = props

    const createColorList = () => list.map((color, index) => {

        const iconColor = color.value !== 'black' ? '#000' : '#fff'
        return (
            <li
                style={{
                    background: color.value,
                    color: iconColor
                }}
                key={index}
                className={[classes.colorItem, color.checked ? classes.active : null].join(' ')}
                onClick={() => action(color.value)}
            >
                <i
                    className={['icon-checkmark', color.checked ? classes.active : classes.hide].join(' ')}
                />
            </li>
        )
    })

    return (
        <ul
            className={classes.colorList}>
            {createColorList()}
        </ul>
    )
}

export default Color