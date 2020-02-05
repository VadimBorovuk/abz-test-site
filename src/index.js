import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App';
import {Provider} from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';

import './common.scss';


import mainStore from './store';

const store = mainStore();

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));

