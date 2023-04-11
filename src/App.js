import './App.css';
import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Messages from "./components/Messages/Messages";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";

function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/dialogs' Component={Dialogs}/>
                        <Route path='/profile' Component={Profile}/>
                        <Route path='/news' Component={News}/>
                        <Route path='/music' Component={Music}/>
                        <Route path='/settings' Component={Settings}/>
                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
