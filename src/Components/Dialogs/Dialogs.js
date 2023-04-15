import React from "react";
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    const peoples = props.dialogsData.map((item) =>
        <DialogItem id={item.id} name={item.name} image={item.image}/>) // Передача пропсов имен в компонент

    const messagesElements = props.messages.map((item) =>
        <Message id={item.id} message={item.message}/>) // Передача пропсов сообщений в компонент

    let newMessage = React.createRef()
    let sendMessage = () => {
        let text = newMessage.current.value;
        alert(text);
    }

    // Рендеринг
    return (
        <div className={styles.dialogs}>
            <div className={styles.peoples}>
                {peoples}
            </div>
            <div className={styles.messages}>
                {messagesElements}
            </div>
            <div className={styles.textareaContainer}>
                <p>Написать сообщение:</p>
                <textarea ref={ newMessage } className={styles.textarea}></textarea>
                <div>
                    <button onClick={ sendMessage } className={styles.btn}>Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
