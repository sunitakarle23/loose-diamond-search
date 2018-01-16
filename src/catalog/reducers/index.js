import { combineReducers } from 'redux';
import applyFetchProductsReducer from './applyFetchProductsReducer';

const catalogReducer = combineReducers({
	products : applyFetchProductsReducer
});

export default catalogReducer;