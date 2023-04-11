import React from "react";
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div>
                <NavLink className = {navData => navData.isActive ? styles.active : styles.item } to="/profile">Profile</NavLink>
            </div>
            <div>
                <NavLink className = {navData => navData.isActive ? styles.active : styles.item } to="/dialogs">Messages</NavLink>
            </div>
            <div>
                <NavLink className = {navData => navData.isActive ? styles.active : styles.item } to="/news">News</NavLink>
            </div>
            <div>
                <NavLink className = {navData => navData.isActive ? styles.active : styles.item } to="/music">Music</NavLink>
            </div>
            <div>
                <NavLink className = {navData => navData.isActive ? styles.active : styles.item } to="/settings">Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;

