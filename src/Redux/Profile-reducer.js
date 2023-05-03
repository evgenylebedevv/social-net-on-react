const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

// Actions это объекты (Вызываются из компонентов и передаются через dispatch(props):
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

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
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText, //приходит из пропсов, из инпута textarea.value
                likesCount: 0
            }
            state.posts.push(newPost);
            state.newPostText = ''
            return state

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state

        default: return state
    }
}

export default profileReducer