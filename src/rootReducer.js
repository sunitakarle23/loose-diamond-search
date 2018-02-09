import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import catalogReducer from './catalog/reducers';
import sidebarReducer from './sidebar/reducers';
import commonReducer from './common/reducers';

// Import `reducers` from all modules and combine them

const rootReducer = combineReducers({
	commonReducer,
	catalogReducer,
	sidebarReducer,
	router: routerReducer
});

export default rootReducer;