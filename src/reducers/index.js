import { combineReducers } from 'redux';
import groupsReducer from './groupReducer';

const rootReducer = combineReducers({
  groups: groupsReducer,
});

export default rootReducer;
