import React from "react";
import styles from './Myposts.module.css'
import Mypost from "./post/Mypost";

const Myposts = () => {
    return (
        <div className={styles.myposts}>
            My posts
            <textarea></textarea>
            <button>New Post</button>
            <Mypost message="Hey whats upp" likesCount="23"/>
            <Mypost message="Nice, thnx" likesCount="1"/>
            <Mypost/>
            <Mypost/>
        </div>
    )
}

export default Myposts;
