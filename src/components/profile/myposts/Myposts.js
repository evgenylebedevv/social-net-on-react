import React from "react";
import styles from './Myposts.module.css'
import Mypost from "./Post/Mypost";

const Myposts = (props) => {

    // Формирование отдельного поста из массива
    const post = props.posts.map(item => <Mypost id={item.id} messages={item.messages} likesCount={item.likesCount}/>)

    return (
        <div className={styles.myposts}>
            <div>
                <h1>
                    My posts
                </h1>
            </div>
            <div>
                <textarea className={styles.textarea} placeholder={'Enter your message'}></textarea>
            </div>
            <div>
                <button className={styles.btn}>New Post</button>
            </div>
            { post }
        </div>
    )
}

export default Myposts;
