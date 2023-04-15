import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import state from './Redux/State'
import {addPost} from "./Redux/State";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <App state={state} addPost={addPost}/>
);
