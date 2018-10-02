const initialState = {
    fatching: false,
    fatched: false,
    dealers: [],
    error: null,
};

const porjectReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_DEALER_START': {
            return {...state, fatching: true}
        }
        case 'FETCH_DEALER_ERROR': {
            return { ...state, fatching: false, error:action.payload }
        }
        case 'RECEIVE_DEALERS': {
            return { ...state,
              fatching: false,
              fatched: true,
              dealers:action.payload,
            }
        }
        default:
    }
    return state;
}

export default porjectReducer;
