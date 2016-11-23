import { combineReducers } from 'redux';

// Reducers
import studentReducer from './student-reducer';

// Combine Reducers
var reducers = combineReducers({
    studentState: studentReducer,
});

export default reducers;
