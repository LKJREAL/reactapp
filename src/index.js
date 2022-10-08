import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App01 from './App01';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{display: 'flex'}}>
      <App name="ccc"/>
      {/* <App01 name="abc" kkk="school"/>
      <App01 name="abc" kkk="school"/>
      <App01 name="abc" kkk="school"/>
      <App01 name="abc" kkk="school"/>
      <App01 name="abc" kkk="school"/>
      <App01 name="abc" kkk="school"/> */}
      {Array.apply(0, Array(10)).map(function (x, i) {
        return <App01 key={i} name={i} kkk={x}/>;
      })}
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
