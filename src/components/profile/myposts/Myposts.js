import React from "react";
import styles from './Myposts.module.css'
import Mypost from "./Post/Mypost";

const Myposts = () => {
    return (
        <div className={styles.myposts}>
            <div>
                <h1>
                    My posts
                </h1>
            </div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>New Post</button>
            </div>
            <Mypost message="Hey whats upp" likesCount="23"/>
            <Mypost message="Nice, thnx" likesCount="1"/>
            <Mypost/>
            <Mypost/>
        </div>
    )
}

export default Myposts;
