import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import catalogReducer from './catalog/reducers';
import sidebarReducer from './sidebar/reducers';

// Import `reducers` from all modules and combine them

const rootReducer = combineReducers({
	catalogReducer,
	sidebarReducer,
	router: routerReducer
});

export default rootReducer;