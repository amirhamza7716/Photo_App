import { combineReducers } from "redux";
import {reducer} from './reducer';
import AuthReducer from './AuthReducer'
export default combineReducers({reducer,AuthReducer});