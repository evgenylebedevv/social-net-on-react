import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './Redux/redux-store'
import {Provider} from "react-redux" //Передает контекст


const root = ReactDOM.createRoot(document.getElementById('root'));

//Provider передает контекст

    root.render(
            <Provider store={store}>
        <App />
            </Provider>
    );

//то что было в app
// state={state} dispatch={store.dispatch.bind(store)} store={store}

// rerenderEntireTree(store.getState());


// store.subscribe(() => {
//     let state = store.getState()
//     rerenderEntireTree(state)
// });