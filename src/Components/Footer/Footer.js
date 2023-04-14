import React from "react";
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.info}>
                info
            </div>
            <div className={styles.devby}>
                <a href='https://siteprovider.ru'>dev by siteprovider.ru</a>
            </div>
            <div className={styles.fmenu}>
                menu
            </div>
        </div>)
}

export default Footer