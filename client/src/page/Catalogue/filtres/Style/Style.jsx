import React from 'react'
import classes from './Style.module.css'

const Style = ({list, action}) => {
    const createList = () => list.map((category, index) => (
        <li
            key={index}
            className={[classes.item, category.checked ? classes.active : null].join(' ')}
            onClick={() => action(category.value[0])}
        >
            <span>{category.value[0]}</span>
            <span>{category.value[1]}</span>
        </li>
    ))

    return (
        <ul className={classes.Category}>
            {createList()}
        </ul>
    )
}

export default Style