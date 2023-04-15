import React from "react";
import styles from './Myposts.module.css'
import Mypost from "./Post/Mypost";

const Myposts = (props) => {

    // Формирование отдельного поста из массива
    const post = props.posts.map(item =>
        <Mypost id={item.id} message={item.message} likesCount={item.likesCount}/>)

    let refTextArea = React.createRef()
    let addPost = () => {
        let text = refTextArea.current.value
        props.addPost(text)
    }

    return (
        <div className={styles.posts}>
            <div>
                <h1>
                    My posts
                </h1>
            </div>
            <div>
                <textarea ref={refTextArea} className={styles.textarea} placeholder={'Enter your message'}></textarea>
            </div>
            <div>
                <button onClick={addPost} className={styles.btn}>New Post</button>
            </div>
            {post}
        </div>
    )
}

export default Myposts;
