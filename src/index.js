import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Video #5
import HaloKomponen from './komponen/HaloKomponen'
import StetFulKomponen from './kontainer/StetFulKomponen'
// end-Video #5

ReactDOM.render(
  <React.StrictMode>
    {/* Video #5 */}
    <HaloKomponen />
    <StetFulKomponen />
    {/* end-Video #5 */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
