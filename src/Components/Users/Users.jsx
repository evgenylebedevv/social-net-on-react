import React from "react";
import styles from './Users.module.css';

let Users = (props) => {
    if (props.users.length == 0) {
        props.setUsers(
            [
                {id: 1, photoUrl: 'https://i.pinimg.com/564x/57/24/87/572487f5c1a3955242fed8bb90d2b531.jpg', followed: false, fullName: 'Artem', status: 'child', location: {country: 'Indonesia', city: 'Bali'}},
                {id: 2, photoUrl: 'https://i.pinimg.com/564x/57/24/87/572487f5c1a3955242fed8bb90d2b531.jpg', followed: true, fullName: 'Elisaveta', status: 'child', location: {country: 'Indonesia', city: 'Bali'}},
                {id: 3, photoUrl: 'https://i.pinimg.com/564x/57/24/87/572487f5c1a3955242fed8bb90d2b531.jpg', followed: false, fullName: 'Alisa', status: 'child', location: {country: 'Indonesia', city: 'Bali'}}
            ]
        )
    }

    return <div>
        {
        props.users.map(user => <div key={user.id}>
            <span>
                <div>
                   <img className={styles.img} src={user.photoUrl}/>
                </div>
                <div>
                    {user.followed
                        ? <button onClick={() => {props.unfollow(user.id)}}>Unfollow</button>
                        : <button onClick={() => {props.follow(user.id)}}>Follow</button>}

                </div>
            </span>
            <span>
               <span>
                    <div>
                        {user.fullName}
                    </div>
                    <div>
                        {user.status}
                    </div>
               </span>
                <span>
                    <div>
                        {user.location.country}
                    </div>
                    <div>
                        {user.location.country}
                    </div>
                </span>
            </span>
        </div>)
    }
    </div>
}

export default Users;