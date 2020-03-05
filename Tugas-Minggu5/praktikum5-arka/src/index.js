import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import FormStatefull from './container/FormStatefull';
import BlogPost from "./container/BlogPost/BlogPost";
import mhsStatefull from './container/Mhs/mhsStatefull';

ReactDOM.render(< BlogPost />, document.getElementById('content'));

serviceWorker.unregister();
