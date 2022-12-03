import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {state} from "./Redux/State";

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App state={state}/>
    </React.StrictMode>
);

reportWebVitals();
