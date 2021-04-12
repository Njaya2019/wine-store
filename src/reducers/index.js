import { combineReducers } from 'redux';
import wines from './wines_reducers';

// combineReducers takes a list of all reducers.
// 'rootReducer' is just a naming convention.
const rootReducer = combineReducers({
    wines,
});

export default rootReducer;