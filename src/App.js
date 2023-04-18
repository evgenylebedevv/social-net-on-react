import './App.css';
import React from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Settings from "./Components/Settings/Settings";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";

//Route слушает путь в сроке браузера и отрисовывает компонент
function App(props) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar dialogsData={props.state.dialogsPage.dialogsData}/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/profile' element={<Profile updateNewPostText={props.updateNewPostText} profilePage={props.state.profilePage} addPost={props.addPost}/>}/>
                        <Route path='/dialogs' element={<Dialogs dialogsData={props.state.dialogsPage.dialogsData} messages={props.state.dialogsPage.messages}/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
