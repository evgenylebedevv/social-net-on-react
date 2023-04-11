import React from "react";
import styles from './Profile.module.css'
import Myposts from "./myposts/Myposts";

const Profile = () => {
    return (
        <div className={styles.profile}>
            <div>
                <img src="https://i.pinimg.com/564x/57/24/87/572487f5c1a3955242fed8bb90d2b531.jpg"/>
            </div>
            <div>
                My description
            </div>
            <div>
                <Myposts/>
            </div>

        </div>
    )
}

export default Profile;
