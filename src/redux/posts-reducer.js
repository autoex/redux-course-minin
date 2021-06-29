const ADD_POST = 'ADD_POST';
const SET_POSTS = 'GET_POSTS';
const IS_FETCHING = 'IS_FETCHING';


const initState = {
    posts: [],
    fetchedPosts: [],
    isFetching: false
}


const postsReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {...state, posts: [...state.posts, action.newPost]}
        case SET_POSTS:
            return  {...state, fetchedPosts: action.payload}
        case IS_FETCHING:
            return {...state, isFetching: action.payload}

        default:

            return state

    }
};

export const addPost =(newPost)=> ({
    type:ADD_POST,
    newPost
})

const isFetching =(payload)=> ({
    type:IS_FETCHING,
    payload
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