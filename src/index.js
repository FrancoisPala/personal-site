import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Components from './js/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Components.Presentation />, document.getElementById('root'))

registerServiceWorker();
