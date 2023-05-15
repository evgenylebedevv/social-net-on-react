const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

//начальные значения
let initialState = {

    posts: [
        {id: 1, message: "Hey what's upp", likesCount: 1},
        {id: 2, message: "Nice, thnx", likesCount: 21},
        {id: 1, message: "Hey what's upp", likesCount: 1}
    ],
    newPostText: 'Hola'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText, //приходит из пропсов, из инпута textarea.value
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state
    }
}

// Actions это объекты (Вызываются из компонентов и передаются через dispatch(props):
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer