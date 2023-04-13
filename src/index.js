import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const posts = [
    {id: 1, messages: "Hey what's upp", likesCount: 1},
    {id: 2, messages: "Nice, thnx", likesCount: 21},
    {id: 1, messages: "Hey what's upp", likesCount: 1},
    {id: 2, messages: "Nice, thnx", likesCount: 21}
] // Посты
const dialogsData = [
    {id: 1, name: "Yulia"},
    {id: 2, name: "Oksana"},
    {id: 3, name: "Katya"},
    {id: 1, name: "Yulia"},
    {id: 2, name: "Oksana"},
    {id: 3, name: "Katya"},
    {id: 1, name: "Yulia"},
    {id: 2, name: "Oksana"},
    {id: 3, name: "Katya"}
] // Входные данные для формирования имён
const messages = [
    {id: 1, message: "Hello! Whats upp?"},
    {id: 2, message: "Hello! How do u do"},
    {id: 3, message: "Hello!"},
    {id: 1, message: "Hello! Whats upp?"},
    {id: 2, message: "Hello! How do u do"},
    {id: 3, message: "Hello!"}
] // Входные данные для формирования сообщений

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <App posts={posts} dialogsData={dialogsData} messages={messages}/>
);
