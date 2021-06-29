import {combineReducers, compose, createStore} from "redux";
import postsReducer from "./posts-reducer";


const reducers = combineReducers({
    posts: postsReducer
})
const store = createStore(reducers, compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
export default store;