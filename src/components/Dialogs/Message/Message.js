import React from "react";
import styles from './Message.module.css'

const Message = (props) => {
    return (
        <div className={styles.message}>
            {props.message}
        </div>
    )
} // Компонент для формирования сообщений

export default Message;
