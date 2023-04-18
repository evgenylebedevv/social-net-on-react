import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import state, {subscribe} from './Redux/State'
import {addPost, updateNewPostText} from "./Redux/State";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
    root.render(
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
    );
}

rerenderEntireTree(state)

subscribe(rerenderEntireTree)