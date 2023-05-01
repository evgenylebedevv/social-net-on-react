// import profileReducer from "./Profile-reducer";
// import dialogsReducer from "./Dialogs-reducer";
// import sidebarReducer from "./Sidebar-reducer";
//
// const store = {
//     _state: {
//         profilePage: {
//             // Посты
//             posts: [
//                 {id: 1, message: "Hey what's upp", likesCount: 1},
//                 {id: 2, message: "Nice, thnx", likesCount: 21},
//                 {id: 1, message: "Hey what's upp", likesCount: 1}
//             ],
//             newPostText: 'Hola'
//         },
//         dialogsPage: {
//             // Входные данные для формирования имён
//             dialogsData: [
//                 {id: 1, name: "Elisaveta", image: "user-1.jpg"},
//                 {id: 2, name: "Artem", image: "user-2.jpg"},
//                 {id: 3, name: "Alisa", image: "user-3.jpg"}
//             ],
//             // Входные данные для формирования сообщений
//             messages: [
//                 {
//                     id: 1,
//                     message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
//                 },
//                 {
//                     id: 2,
//                     message: "Hello! How do u do. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
//                 },
//                 {
//                     id: 3,
//                     message: "Hello! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
//                 }
//             ],
//             // Новое сообщение
//             newMessageBody: 'Whats up!'
//         },
//         sidebar: {}
//
//     },
//
//     _callSubscriber() {
//         // console.log ('stateChanged')
//     },
//
//     getState() {
//       return this._state
//     },
//
//     subscribe(observer) {
//         this._callSubscriber = observer
//     },
//
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action)
//
//         this._callSubscriber(this._state)
//     }
// }
//
// export default store;
// window.store = store;