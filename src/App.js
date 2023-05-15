import './App.css';
import React from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/profile/Profile";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import UsersContainer from "./Components/Users/UsersContainer";



//Route слушает путь в сроке браузера и отрисовывает компонент
function App() {
    return (
        <div className='app-wrapper'>
            <BrowserRouter>
            <Header />
            <Navbar />
            <div className="app-wrapper-content">
                <Routes>
                    <Route path='/profile' element={<Profile />}/>
                    <Route path='/dialogs' element={<DialogsContainer />}/>
                    <Route path='/users' element={<UsersContainer />}/>
                    <Route path='/profile' element={<Music />}/>
                    <Route path='/dialogs' element={<News />}/>
                </Routes>
            </div>
            <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
