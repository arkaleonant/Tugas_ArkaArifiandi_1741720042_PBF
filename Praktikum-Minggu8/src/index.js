import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'react-redux';
import { Provider } from 'react-redux';
import { reducer as formReducer, reduxForm } from 'redux-form';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({
  form: formReducer,
});

const store = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);

// SignInForm = reduxForm({
//   form:'signIn',
//   validate,
// })(SignInForm);

// const renderField = ({input, label, type, meta: {touched, error, warning}}) => (
//   <div>
//     <div className="control">
//       <label className="field">{label}</label>
//       <input className="input" {...input} placeholder={label} type={type}/>
//       {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
//     </div>
//   </div>
// )

//registerServiceWorker();

serviceWorker.register();
