import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Import `reducers` from all modules
// and combine them
// import loginReducer from './login/reducers/applyLogin';

const rootReducer = combineReducers({
	// login: loginReducer,
	router: routerReducer
});

export default rootReducer;