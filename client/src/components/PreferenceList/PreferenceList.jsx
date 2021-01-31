import React from 'react';
import classes from './PreferenceList.module.css'

const PreferenceListData = [
    {
        title: 'Free Shipping',
        text: 'Proin hendrerit suscipit justo, luctus volutpat leo sollicitudin ac.',
        icon: 'icon-Shape_86'
    },
    {
        title: '24/7 Technical Support',
        text: 'Proin hendrerit suscipit justo, luctus volutpat leo sollicitudin ac.',
        icon: 'icon-Shape_87'
    },
    {
        title: 'return and excanges',
        text: 'Proin hendrerit suscipit justo, luctus volutpat leo sollicitudin ac.',
        icon: 'icon-Shape_89'
    },
    {
        title: 'Customer loyalty programs',
        text: 'Proin hendrerit suscipit justo, luctus volutpat leo sollicitudin ac.',
        icon: 'icon-Shape_88'
    },
]

const PreferenceList = props => {
    const renderList = PreferenceListData.map((item, index) => (
        <li {...props} key={index}>
            <div className={classes.content}>
                <i className={[item.icon, classes.icon].join(' ')}/>
                <h3 className={classes.tittle}>{item.title}</h3>
                <p className={classes.description}>{item.text}</p>
            </div>
        </li>
    ))
    return (
        <ul className={classes.PreferenceList}>
            {renderList}
        </ul>
    )
}

export default PreferenceList;

