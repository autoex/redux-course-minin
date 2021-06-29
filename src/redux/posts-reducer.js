const ADD_POST = 'ADD_POST';


const initState = {
    posts: [],
    fetchedPosts: []
}


const postsReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {...state, posts: [...state.posts, action.newPost]}

        default:

            return state

    }
};

export const addPost =(newPost)=> ({
    type:ADD_POST,
    newPost
})

export default postsReducer;