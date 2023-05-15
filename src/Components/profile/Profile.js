import React from "react";
import styles from './Profile.module.css'
import Profileinfo from "./Profileinfo/Profileinfo";
import MyPostsContainer from "./myposts/MypostsContainer";

const Profile = (props) => {
    return (
        <div className={styles.profile}>
            <div>
                <Profileinfo />
            </div>
            <div>
                <MyPostsContainer />
            </div>
        </div>
    )
}

export default Profile;