import React from "react";
import styles from './Mypost.module.css'

const Mypost = (props) => {
    return (
        <div className={styles.item}>
            <img alt="avatar" src="https://i.pinimg.com/564x/57/24/87/572487f5c1a3955242fed8bb90d2b531.jpg"/>
            {props.message}
            <div className={styles.likes}>
                {props.likesCount}
            </div>
            <div>
                <button className={styles.btn}>like</button>
            </div>

        </div>
    )
}

export default Mypost;
