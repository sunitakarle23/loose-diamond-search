import { combineReducers } from 'redux';
import applyFetchProductsReducer from './applyFetchProductsReducer';
import applyFetchLDSPropsReducer from './applyFetchLDSPropsReducer';

const catalogReducer = combineReducers({
	products : applyFetchProductsReducer,
	ldsProps : applyFetchLDSPropsReducer
});

export default catalogReducer;