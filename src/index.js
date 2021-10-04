import React from 'react';
import ReactDOM from 'react-dom';
import "./assests/css/bootstrap.min.css";
import "./assests/css/main.css";
import "aos/dist/aos.css";
import "./assests/js/main";
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
