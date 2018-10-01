export const createDealerAction = (dealer) => {
    return (dispatch, getState) => {
        // Here will make the async call to database
        // console.log('async call to database');
        dispatch({
            type: 'CREATE_DEALER',
            dealer
        })
    }
}
