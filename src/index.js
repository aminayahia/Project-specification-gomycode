import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "react-redux"
import store from './Redux/Store';

import {BrowserRouter as Router} from "react-router-dom"
import App from './App';
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      
    <Router>
      <App />
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);