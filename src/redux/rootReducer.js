import { combineReducers } from 'redux';
import backlogReducer from './backlog/backlogSlice';

export default combineReducers({
  backlog: backlogReducer,
});
