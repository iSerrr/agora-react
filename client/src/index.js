import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from "react-router-dom";

const root = document.getElementById('root')

const app = (
    <React.StrictMode>
        <Router>
            <App/>
        </Router>
    </React.StrictMode>
)

ReactDOM.render(app, root);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// const input = {
//     ' ':[5],
//     d:[10],
//     e:[1],
//     H:[0],
//     l:[2,3,9],
//     o:[4,7],
//     r:[8],
//     w:[6]
// }
//
// const buildString = (m) => {
//
//     let counter = 0;
//     for (let key in m) {
//       m[key].map(()=> counter++)
//     }
//     const arr = new Array(counter)
//
//     for (let key in m) {
//         m[key].map((num)=> arr[num] = key)
//     }
//     console.log(arr.join(''))
//
// }
// buildString(input)