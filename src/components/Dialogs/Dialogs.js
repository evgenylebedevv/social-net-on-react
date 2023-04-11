import React from "react";
import styles from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.peoples}>
                <div className={styles.people}>
                    Semen
                </div>
                <div >
                    <NavLink className = {navData => navData.isActive ? styles.active : styles.item }>Yulya</NavLink>
                </div>
                <div className={styles.item}>
                    Olya
                </div>
            </div>
            <div className={styles.messages}>
                <div className={styles.message}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ea eos iure laborum libero maxime, minus nulla quaerat rerum voluptas! Consequuntur culpa doloribus earum expedita facere, harum illo quod sint.</div>
                <div className={styles.message}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolorem eaque ex ipsam nesciunt, non omnis optio provident, quae quas saepe sit. Dicta itaque modi non tenetur unde! Eaque, quibusdam.</div>
                <div className={styles.message}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad delectus eaque et fugiat maiores molestiae nobis quaerat repellat, vel. Accusamus alias aliquam commodi ea eius illo laborum magnam ratione.</div>
            </div>

        </div>
    )
}

export default Dialogs;
