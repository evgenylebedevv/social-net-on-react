import React from "react";
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/Dialogs-reducer";

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage

    let newMessage = React.createRef()

    let peoples = state.dialogsData.map((item) =>
        <DialogItem id={item.id} name={item.name} image={item.image}/>) // Передача пропсов имен в компонент

    let messagesElements = state.messages.map((item) =>
        <Message id={item.id} message={item.message}/>) // Передача пропсов сообщений в компонент

    let newMessageBody = state.newMessageBody // Передача пропсов нового сообщения в компонент

    let onNewMessageChange = (event) => {
        let body = event.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
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
