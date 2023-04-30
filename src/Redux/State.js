const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const store = {
    _state: {
        profilePage: {
            // Посты
            posts: [
                {id: 1, message: "Hey what's upp", likesCount: 1},
                {id: 2, message: "Nice, thnx", likesCount: 21},
                {id: 1, message: "Hey what's upp", likesCount: 1}
            ],
            newPostText: 'Hola'
        },
        dialogsPage: {
            // Входные данные для формирования имён
            dialogsData: [
                {id: 1, name: "Elisaveta", image: "user-1.jpg"},
                {id: 2, name: "Artem", image: "user-2.jpg"},
                {id: 3, name: "Alisa", image: "user-3.jpg"}
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
    },
    _callSubscriber() {
        // console.log ('stateChanged')
    },

    getState() {
      return this._state
    },
    // addPost()  {
    //
    //     let newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0
    //     }
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = ''
    //     this._callSubscriber(this._state)
    // },

    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText
    //     this._callSubscriber(this._state)
    // },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = ''
            this._state.dialogsPage.messages.push({id: Math.floor(Math.random()*100), message: body})
            this._callSubscriber(this._state)
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default store;
window.store = store;