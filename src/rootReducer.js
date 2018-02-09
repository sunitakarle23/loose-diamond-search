import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import catalogReducer from './catalog/reducers';

// Import `reducers` from all modules and combine them

const rootReducer = combineReducers({
	catalogReducer,
	router: routerReducer
});

export default rootReducer;