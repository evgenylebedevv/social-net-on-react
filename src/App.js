import './App.css';
import React from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Messages from "./components/messages/Messages";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";


function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Dialogs/>
                {/*<Profile/>*/}
            </div>

            <Footer/>
        </div>
    );
}

export default App;
