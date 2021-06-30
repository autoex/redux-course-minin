const IS_FETCHING = 'IS_FETCHING';
const ALERT_SHOW = 'ALERT_SHOW';
const ALERT_HIDE = 'ALERT_HIDE';


const initState = {
    alertVisible: false,
    alertText: '',
    isFetching: false
}


const appReducer = (state = initState, action) => {
    switch (action.type) {

        case IS_FETCHING:
            return {...state, isFetching: action.payload}

        case ALERT_HIDE:
            return {...state, alertVisible: false}

        case ALERT_SHOW:
            return {...state, alertVisible: true, alertText: action.payload}

        default:

            return state

    }
};



export const isFetching =(payload)=> ({
    type:IS_FETCHING,
    payload
})

export const alertShow =(payload)=> ({
    type: ALERT_SHOW,
    payload

})

export const alertHide =()=> ({
    type: ALERT_HIDE

})


export default appReducer;