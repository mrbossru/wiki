import React from 'react';
import {createRoot} from 'react-dom/client'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Model} from "./Models/Model";

const root = createRoot(document.getElementById('root'));

const RenderApp = (model) => {
    root.render(
        <React.StrictMode>
            <App model={model}/>
        </React.StrictMode>
    );
}

RenderApp(Model);

reportWebVitals();
