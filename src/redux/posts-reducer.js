import {alertShow, isFetching} from "./app-reducer";

const ADD_POST = 'ADD_POST';
const SET_POSTS = 'GET_POSTS';


const initState = {
    posts: [],
    fetchedPosts: []
}


const postsReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {...state, posts: [...state.posts, action.newPost]}
        case SET_POSTS:
            return {...state, fetchedPosts: action.payload}


        default:

            return state

    }
};

export const addPost = (newPost) => ({
    type: ADD_POST,
    newPost
})


const setPost = (payload) => ({
    type: SET_POSTS,
    payload
})
export const getPosts = () => async (dispatch) => {

    try {

        dispatch(isFetching(true))
        const request = await fetch('https://jsonplaceholder.typicode.com1/posts?_limit=5');
        const response = await request.json()
        console.log(response)
        dispatch(setPost(response))
        dispatch(isFetching(false))

    } catch (e) {
        dispatch(alertShow('Ups'))
       dispatch(isFetching(false))


    }

}

export default postsReducer;