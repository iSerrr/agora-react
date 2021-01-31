import React, {useState, useEffect} from 'react'
import classes from './AccordionMenu.module.css'
import Accordion from './Accordion/Accordion'
import axios from 'axios'

const AccordionMenu = () => {

    const links = ['Home', 'About', 'Services', 'Contacts']

    const [categories, setCategories] = useState([])
    const [isActive, setIsActive] = useState(null)

    useEffect(() => {
        axios.get('/api/categories ')
            .then(({data}) => setCategories([...data.map(item => item), ...links]))
    }, [])

    const toggleAccordion = id => {
        (id === isActive)
            ? setIsActive(null)
            : setIsActive(id)
    }

    const renderList = () => categories.map((category, index) => (
            <li key={index}>
                <Accordion toggleAccordion={toggleAccordion}
                           id={index}
                           isActive={index === isActive}
                           links={category}
                />
            </li>
        )
    )

    return (
        <nav className={classes.AccordionMenu}>
            <ul className={classes.list}>
                {renderList()}
            </ul>
        </nav>
    )
}

export default AccordionMenu