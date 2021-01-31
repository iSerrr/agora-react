import React, {useEffect, useState} from 'react'
import classes from './FilterLayout.module.css'
import filterTypes from '../../../lib/filterTypes'

const withFilter = Component => ({changeOptions, list, type, previousOption}) => {

    const {title, fewOption, required, defaultValue} = filterTypes(type)

    const [isLoaded, setIsLoaded] = useState(false)
    const [selectedFilterOptions, setSelectedFilterOptions] = useState(previousOption ? [previousOption] : [])
    const [optionsIsOpen, setOptionsIsOpen] = useState(true)

    const checkSelected = (option) => {
        if (typeof option === 'object') return selectedFilterOptions.includes(option[0])
        return selectedFilterOptions.includes(option)
    }

    const checkedList = list && list.map(item => ({checked: checkSelected(item), value: item}))

    const finallyList = required ? defaultValue : fewOption ? checkedList : list

    useEffect(() => {
        setIsLoaded(true)
        if (!isLoaded) return
        const data = {
            option: type,
            value: selectedFilterOptions
        }
        changeOptions(data)
    }, [selectedFilterOptions])

    const updateOptions = (value) => fewOption ? replaceOptions(value) : fullChangeOptions(value)

    const fullChangeOptions = (value) => setSelectedFilterOptions(value)

    const replaceOptions = (value) => {
        if (selectedFilterOptions.includes(value)) return setSelectedFilterOptions(selectedFilterOptions.map(item => item === value ? null : item).filter(item => item))
        setSelectedFilterOptions([...selectedFilterOptions, value])
    }

    const clear = (e) => {
        e.stopPropagation()
        setSelectedFilterOptions(defaultValue)
    }

    const toggleOptions = () => setOptionsIsOpen(!optionsIsOpen)

    const showParams = optionsIsOpen ? {
        maxHeight: '700px',
        padding: '32px 45px 0 60px'

    } : {
        maxHeight: '0px',
        padding: '0 45px 0 60px'
    }

    const backGround = type === 'price' ? '#f6f6f6' : '#ffffff'

    return (
        <div
            style={{backgroundColor: backGround}}
            className={classes.filterItemConteiner}>
            <h3 className={classes.title}
                onClick={toggleOptions}
            >
                <span
                    className={[classes.toggler, optionsIsOpen ? classes.active : null].join(' ')}
                />
                {title}
                <button className={classes.close}
                        onClick={clear}
                />
            </h3>
            <div
                className={classes.wrapper}
                style={showParams}>
                <Component list={finallyList} action={updateOptions}/>
            </div>
        </div>
    )
}

export default withFilter