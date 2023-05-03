import React from "react";
import styles from './Myposts.module.css'
import Mypost from "./Post/Mypost";

const Myposts = (props) => {
    // Формирование отдельного поста из массива
    const post = props.posts.map(item =>
        <Mypost id={item.id} message={item.message} likesCount={item.likesCount}/>)

    let newPostElement = React.createRef()

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }

    return (
        <div className={styles.posts}>
            <div>
                <h1>
                    My posts
                </h1>
            </div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement}
                          className={styles.textarea} value={props.newPostText}
                          placeholder={'Enter your message'} />
            </div>
            <div>
                <button onClick={onAddPost} className={styles.btn}>New Post</button>
            </div>
            {post}
        </div>
    )
}

export default Myposts;
