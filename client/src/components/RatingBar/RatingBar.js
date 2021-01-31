import React, {Component} from 'react';
import {generate as id} from 'shortid';


import './RattingBar.scss'

class RatingBar extends Component {

    get getStarsList() {
        let list = []
        for (let i = 0; i < 5; i++) {
            list = [...list, (
                <li
                    key={id()}
                    className={`ratting-bar__star icon-star-full ${i < this.props.currentStars ? 'active' : null}`}/>
            )]
        }
        return list
    }

    render() {
        return (
            <ul className="ratting-bar">
                {this.getStarsList}
            </ul>
        );
    }
}

export default RatingBar;