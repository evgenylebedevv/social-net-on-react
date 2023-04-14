import React from "react";
import styles from './Profile.module.css'
import Myposts from "./myposts/Myposts";
import Profileinfo from "./Profileinfo/Profileinfo";

const Profile = (props) => {
    return (
        <div className={styles.profile}>
            <div>
                <Profileinfo/>
            </div>
            <div>
                <Myposts posts={props.posts}/>
            </div>
        </div>
    )
}

export default Profile;