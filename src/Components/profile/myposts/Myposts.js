import React from "react";
import styles from './Myposts.module.css'
import Mypost from "./Post/Mypost";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/Profile-reducer";


const Myposts = (props) => {

    // Формирование отдельного поста из массива
    const post = props.posts.map(item =>
        <Mypost id={item.id} message={item.message} likesCount={item.likesCount}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);

    }

    return (
        <div className={styles.posts}>
            <div>
                <h1>
                    My posts
                </h1>
            </div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} className={styles.textarea} value={props.newPostText} placeholder={'Enter your message'} />
            </div>
            <div>
                <button onClick={addPost} className={styles.btn}>New Post</button>
            </div>
            {post}
        </div>
    )
}

export default Myposts;
