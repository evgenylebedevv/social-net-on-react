import user1 from '../user-1.jpg';
import user2 from '../user-2.jpg';
import user3 from '../user-3.jpg';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';


// Actions это объекты (Вызываются из компонентов и передаются через dispatch(props):
export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

let initialState = {
    // Входные данные для формирования имён
    dialogsData: [
        {id: 1, name: "Elisaveta", image: user1},
        {id: 2, name: "Artem", image: user2},
        {id: 3, name: "Alisa", image: user3}
    ],
    // Входные данные для формирования сообщений
    messages: [
        {
            id: 1,
            message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            id: 2,
            message: "Hello! How do u do. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            id: 3,
            message: "Hello! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
    ],
    // Новое сообщение
    newMessageBody: 'Whats up!'
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody
            return {
                ...state,
                newMessageBody: '',
                messages: [ ...state.messages, {id: Math.floor(Math.random() * 100), message: body} ]
            }
        default:
            return state
    }
}

export default dialogsReducer