import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// this App is what is getting injected into 'root'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // everything is going to be injected into root
  // in HTML
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
