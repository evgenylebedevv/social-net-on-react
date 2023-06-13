import React from "react";
import styles from './Users.module.css';
import axios from "axios";
import user1 from '../../user-1.jpg';

let Users = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items)
            })
        }
    }


    // props.setUsers(
    //     [
    //         {id: 1,
    //             photoUrl: 'https://i.pinimg.com/564x/57/24/87/572487f5c1a3955242fed8bb90d2b531.jpg',
    //             followed: false,
    //             fullName: 'Artem',
    //             status: 'child',
    //             location: {country: 'Indonesia', city: 'Bali'}},
    //         {id: 2,
    //             photoUrl: 'https://i.pinimg.com/564x/57/24/87/572487f5c1a3955242fed8bb90d2b531.jpg',
    //             followed: true,
    //             fullName: 'Elisaveta',
    //             status: 'child',
    //             location: {country: 'Indonesia', city: 'Bali'}},
    //         {id: 3,
    //             photoUrl: 'https://i.pinimg.com/564x/57/24/87/572487f5c1a3955242fed8bb90d2b531.jpg',
    //             followed: false,
    //             fullName: 'Alisa',
    //             status: 'child',
    //             location: {country: 'Indonesia', city: 'Bali'}}
    //     ]
    // )

    return <div>
        <button onClick={getUsers}>Get Users</button>
        {
            props.users.map(user => <div key={user.id}>
            <span>
                <div>
                   <img className={styles.img} src={user.photos.small != null ? user.photos.small : user1}/>
                </div>
                <div>
                    {user.followed
                        ? <button onClick={() => {
                            props.unfollow(user.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(user.id)
                        }}>Follow</button>}

                </div>
            </span>
                <span>
               <span>
                    <div>
                        {user.name}
                    </div>
                    <div>
                        {user.status}
                    </div>
               </span>
                <span>
                    <div>
                        {"user.location.country"}
                    </div>
                    <div>
                        {"user.location.country"}
                    </div>
                </span>
            </span>
            </div>)
        }
    </div>
}

export default Users;