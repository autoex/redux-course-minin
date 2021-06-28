import {combineReducers, createStore} from "redux";
import postsReducer from "./posts-reducer";


const reducers = combineReducers({
    posts: postsReducer
})
const store = createStore(reducers);
export default store;