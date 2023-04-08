import './App.css';
import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Messages from "./components/Messages";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";


function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    );
}

export default App;
