import React from "react";
import styles from './Profile.module.css'
import Myposts from "./myposts/Myposts";

const Profile = () => {
    return (
        <div className={styles.profile}>
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

export default Profile;
