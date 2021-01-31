import React, {useContext} from 'react'
import classes from './Accordion.module.css'
import {Link} from 'react-router-dom'
import {MenuContext} from '../../../../App'

const Accordion = ({links, id, isActive, toggleAccordion}) => {

    const {toggleMenu} = useContext(MenuContext)

    const renderLinkList = ({styles}) => (styles.map((item, index) => (
            <li key={index}>
                <Link to="/"
                      onClick={toggleMenu}
                >{item}</Link>
            </li>
        )
    ))

    return (
        <div
            className={[classes.Accordion, isActive ? classes.active : null].join(' ')}
            onClick={() => toggleAccordion(id)}
        >
            {
                links.name ? (
                        <>
                            <div style={{maxHeight: `${100}px`}} className={classes.label}>
                                <h2>{links.name}</h2>
                                <span>{isActive ? '-' : '+'}</span>
                            </div>
                            <ul>
                                {renderLinkList(links)}
                            </ul>

                        </>
                    )
                    : (
                        <div className={classes.label}>
                            <Link to="/"
                                  onClick={toggleMenu}
                            >
                                {links}
                            </Link>
                        </div>
                    )
            }
        </div>
    )
}

export default React.memo(Accordion)