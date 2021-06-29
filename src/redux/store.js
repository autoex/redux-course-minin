import {combineReducers, compose, createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import postsReducer from "./posts-reducer";


const reducers = combineReducers({
    posts: postsReducer
})
const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));
export default store;