import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/Dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage

    // let newMessage = React.createRef()
    //
    // let peoples = state.dialogsData.map((item) =>
    //     <DialogItem id={item.id} name={item.name} image={item.image}/>) // Передача пропсов имен в компонент
    //
    // let messagesElements = state.messages.map((item) =>
    //     <Message id={item.id} message={item.message}/>) // Передача пропсов сообщений в компонент

    // let newMessageBody = state.newMessageBody // Передача пропсов нового сообщения в компонент

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (body) => {
        // let body = event.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    // Рендеринг
    return (
        <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
                 dialogsPage={state}/>
    )
}

export default DialogsContainer;
