import React from "react";
import styles from './Profileinfo.module.css'

const Profileinfo = () => {
    return (
        <div className={styles.info}>
            <div>
                <img alt="avatar" src="https://i.pinimg.com/564x/57/24/87/572487f5c1a3955242fed8bb90d2b531.jpg"/>
            </div>
            <div>
                My description
            </div>
        </div>
    )
}

export default Profileinfo;
