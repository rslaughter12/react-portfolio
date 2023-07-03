// when we import from react, it allows us to use the JSX syntax
import React from 'react';
// reactDom renders our whole app onto the page
import ReactDOM from 'react-dom/client';
// app is a component that we created 
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'

// entry point 
// the webpack configuration of react is using src/index.js as the entry point


//  this is getting the dom element from the html file
// this is telling ReactDOM where to render our app
const root = ReactDOM.createRoot(document.getElementById('root'));

// this is rendering our app onto the page
root.render(
<App />
);
