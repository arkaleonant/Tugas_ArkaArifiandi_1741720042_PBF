import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
import BlogPost from "./container/BlogPost/BlogPost";
import mhsStatefull from './container/tugas/mhsStatefull';

ReactDOM.render(<BlogPost />, document.getElementById('content'));

serviceWorker.unregister();
