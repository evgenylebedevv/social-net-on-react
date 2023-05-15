import React from "react";
import styles from './Navbar.module.css'
import {NavLink, Route} from "react-router-dom";
import UsersContainer from "../Users/UsersContainer";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div>
                <NavLink className = {navData => navData.isActive ? styles.active : styles.item } to="/profile">Profile
                </NavLink>
            </div>
            <div>
                <NavLink className = {navData => navData.isActive ? styles.active : styles.item } to="/dialogs">Messages
                </NavLink>
            </div>
            <div>
                <NavLink className = {navData => navData.isActive ? styles.active : styles.item } to="/users">Users
                </NavLink>
            </div>
            <div>
                <NavLink className = {navData => navData.isActive ? styles.active : styles.item } to="/news">News
                </NavLink>
            </div>
            <div>
                <NavLink className = {navData => navData.isActive ? styles.active : styles.item } to="/music">Music
                </NavLink>
            </div>

            <div className={styles.friendsWrapper}>
                <h2>Friends</h2>
                {/*<div className={styles.friendsContainer}>*/}
                {/*    <div className={styles.friend}>*/}
                {/*        <img className={styles.friendsImage} src={props.dialogsData[0].image}/>*/}
                {/*        <p>{props.dialogsData[0].name}</p>*/}
                {/*    </div>*/}
                {/*    <div className={styles.friend}>*/}
                {/*        <img className={styles.friendsImage} src={props.dialogsData[1].image}/>*/}
                {/*        <p>{props.dialogsData[1].name}</p>*/}
                {/*    </div>*/}
                {/*    <div className={styles.friend}>*/}
                {/*        <img className={styles.friendsImage} src={props.dialogsData[2].image}/>*/}
                {/*        <p>{props.dialogsData[2].name}</p>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </nav>



    )
}

export default Navbar;

