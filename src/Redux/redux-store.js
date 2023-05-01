import {combineReducers, legacy_createStore as createStore} from "redux"
import profileReducer from "./Profile-reducer";
import sidebarReducer from "./Sidebar-reducer";
import dialogReducer from "./Dialogs-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sidebar: sidebarReducer
})

let store = createStore(reducers)

export  default  store