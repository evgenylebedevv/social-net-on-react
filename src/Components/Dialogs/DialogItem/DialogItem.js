import React from "react";
import styles from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    const path = "/dialogs/" + props.id; // Формирование ссылки для конкретного диалога

    return (
        <div className={styles.container}>
            <NavLink to={path} className={link => link.isActive ? styles.active : styles.people}>
                <img className={styles.avatar} src={props.image}/>
                <div className={styles.name}>{props.name}</div>
            </NavLink>

        </div>
    )
} // Компонент для формирования имён со ссылками

export default DialogItem;
