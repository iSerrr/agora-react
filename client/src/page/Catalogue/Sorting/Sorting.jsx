import React, {useState} from 'react'
import classes from './Sorting.module.css'

import {Select, InputLabel, FormControl, MenuItem}  from '@material-ui/core'

const Sorting = ({condition}) => {

    const options = ['Brand A-Z', 'Brand Z-A', 'Price $-$$', 'Price $$-$']

    const [value, setValue] = useState(options[0])

    const handleChange = (event) => {
        setValue(event.target.value)
        condition(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (

        <FormControl onSubmit={handleSubmit} className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Sort by:</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                onChange={handleChange}
            >

                {options.map((option, index) => (
                    <MenuItem
                        key={index}
                        value={option}
                    >
                        {option}
                    </MenuItem>

                ))
                }
            </Select>
        </FormControl>
    )
}

export default Sorting