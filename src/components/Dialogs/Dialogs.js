import React from "react";
import styles from './Dialogs.module.css'
import Myposts from "../profile/myposts/Myposts";

const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <div>
                <img src='https://blog.hootsuite.com/wp-content/uploads/2020/02/Image-copyright-556x556.png'/>
            </div>
            <div>
                Description
            </div>
            <Myposts/>
        </div>
    )
}

export default Dialogs;
