const IS_FETCHING = 'IS_FETCHING';


const initState = {

    isFetching: false
}


const appReducer = (state = initState, action) => {
    switch (action.type) {

        case IS_FETCHING:
            return {...state, isFetching: action.payload}

        default:

            return state

    }
};



export const isFetching =(payload)=> ({
    type:IS_FETCHING,
    payload
})


export default appReducer;