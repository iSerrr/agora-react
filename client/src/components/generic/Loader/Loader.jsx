import React, {Component} from 'react';

import './loader.scss'

class Loader extends Component {
    render() {
        return (
            <div className='loader__wrapper'>
                <div className='loader'>
                    Loading...
                </div>
            </div>

        );
    }
}

export default Loader;