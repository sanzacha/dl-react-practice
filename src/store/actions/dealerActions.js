import axios from 'axios';

export const createDealerAction = (dealer) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'FETCH_DEALER_START'
        })

        axios.get(`https://dl-react.firebaseio.com/dealers.json`)
        .then(res => {
            dispatch({
                type: 'RECEIVE_DEALERS',
                payload: res.data
            })
        })

        .catch((err) => {
            dispatch({
                type: 'FETCH_DEALER_ERROR',
                payload: err
            })
        })
    }
}
