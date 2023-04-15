import React from "react";
import styles from './Message.module.css'

const Message = (props) => {
    return (
        <div className={styles.message}>
            <div>
                {props.message}
            </div>
        </div>
    )
} // Компонент для формирования сообщений

export default Message;
