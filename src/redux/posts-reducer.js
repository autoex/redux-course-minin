import {isFetching} from "./app-reducer";

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
            return  {...state, fetchedPosts: action.payload}


        default:

            return state

    }
};

export const addPost =(newPost)=> ({
    type:ADD_POST,
    newPost
})



const setPost =(payload)=> ({
    type:SET_POSTS,
    payload
})
export const getPosts =()=>(dispatch)=> {
    dispatch(isFetching(true))
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        .then(response => response.json())
        .then(json => {


            dispatch(setPost(json))
            dispatch(isFetching(false))
        })


}

export default postsReducer;