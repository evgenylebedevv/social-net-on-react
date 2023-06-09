import React from "react";
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let state = props.dialogsPage
    let newMessage = React.createRef()

    let peoples = state.dialogsData.map(item =>
        <DialogItem id={item.id} name={item.name} image={item.image} key={item.id} /> ) // Передача пропсов имен в компонент

    let messagesElements = state.messages.map(item =>
        <Message id={item.id} key={item.id} message={item.message} /> ) // Передача пропсов сообщений в компонент

    let newMessageBody = state.newMessageBody; // Передача пропсов нового сообщения в компонент

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (event) => {
        let body = event.target.value
        // props.store.dispatch(updateNewMessageBodyCreator(body))
        props.updateNewMessageBody(body)
    }

    // Рендеринг
    return (
        <div className={styles.dialogs}>
            <div className={styles.peoples}>
                {peoples}
            </div>
            <div className={styles.messages}>
                <div>{messagesElements}</div>
            </div>
            <div className={styles.textareaContainer}>
                <p>Написать сообщение:</p>
                <textarea ref={newMessage} className={styles.textarea} value={newMessageBody}
                          onChange={onNewMessageChange}></textarea>
                <div>
                    <button onClick={onSendMessageClick} className={styles.btn}>Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
