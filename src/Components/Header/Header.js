import React from "react";
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <img alt="logotype" src='https://img-corp.com/images/logo@2x.png'/>
        </header>
    )
}

export default Header;