import React from "react";
import ReactDOM from "react-dom";
// import {BrowserRouter as Router } from "react-router-dom";



import App from "./App";
import { StateProvider } from "./compontent/StateProvider";
import { initialState } from "./Context/initalState";
import reducer from "./Context/reducer";



ReactDOM.render(
  // <Router>

  
  
  <StateProvider initialState={initialState} reducer={reducer}>
  
  
    <App />
    </StateProvider>
    // </Router>

  
  , document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



