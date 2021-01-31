import React from 'react'
import classes from './Size.module.css'

const Size = ({list, action}) => {

    const createSizesList = () => list.map((size, index) => (
        <li
            onClick={()=> action(size.value)}
            className={[classes.item, size.checked ? classes.active : null].join(' ')}
            key={index}
        >
            {size.value}
        </li>
    ))

    return (
        <ul
            className={[classes.list, classes.active].join(' ')}
        >
            {createSizesList()}
        </ul>
    )
}

export default Size