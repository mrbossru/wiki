import React from 'react';
import {createRoot} from 'react-dom/client'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Model} from "./Models/Model";
import {Stor} from "./Stor/Stor";

const root = createRoot(document.getElementById('root'));

const RenderApp = () => {
    root.render(
        <React.StrictMode>
            <App model={Model}/>
        </React.StrictMode>
    );
}

Stor.subscribe(RenderApp);
RenderApp(Model);
reportWebVitals();
