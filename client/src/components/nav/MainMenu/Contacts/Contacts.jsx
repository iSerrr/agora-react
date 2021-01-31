import React from 'react';
import classes from './Contacts.module.scss'

const contacts = [
    {
        label: 'Addreass',
        value: '2, Dovbusha St. Ivano-Frankiwsk, Ukraine',
        iconCls: ''
    },
    {
        label: 'Phone',
        value: '+7 234 949-58-83 +7 234 949-58-83',
        iconCls: ''
    },
    {
        label: 'Working Hours',
        value: 'Monday-Friday 8am-8pm',
        iconCls: ''
    },
]

const ContactsList = props => {
    const renderList = () => contacts.map((item, index)=>(
        <li
        key={index}>
            <h3>{item.label}</h3>
            <p>{item.value}</p>
        </li>

    ))
    return (
        <ul className={classes.ContactsList}>
            {renderList()}
        </ul>
    )
}

export default ContactsList;