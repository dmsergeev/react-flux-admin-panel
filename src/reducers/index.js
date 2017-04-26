import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorsReducer';

const rootReducer = combineReducers({
    courses,
    authors
});

export default rootReducer;
