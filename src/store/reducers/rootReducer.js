// Root Reducer to combine all the reducers
import authReducer from './authReducer';
import dealersReducer from './dealersReducer';
import { combineReducers } from 'redux';

const rootReduer = combineReducers({
    auth: authReducer,
    dealersInfo: dealersReducer,
})

export default rootReduer;
