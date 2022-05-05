import React from 'react'
import * as ReactDom from 'react-dom/client'
import App from './containers/App.js'
import css from "./main.css";

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<App />);