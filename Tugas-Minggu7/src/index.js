import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux' ;
import { createStore, compose } from 'redux' ;
import MainReducer from './reducers/MainReducer';  
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
 
const store = compose(window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)(MainReducer) 
 
ReactDOM.render(<Provider store={store}> <App /> </Provider> , document.getElementById('root')); 

serviceWorker.register();