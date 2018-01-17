import { combineReducers } from 'redux';
import applyFetchLDSPropsReducer from './applyFetchLDSPropsReducer';

const sidebarReducer = combineReducers({
	ldsProps : applyFetchLDSPropsReducer
});

export default sidebarReducer;