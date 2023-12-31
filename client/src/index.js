import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import App from "./App";
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

//from firebase settings
const firebaseConfig =
{
    //insert firebase config from console
};

initializeApp(firebaseConfig);

ReactDOM.render(
        <App />,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
