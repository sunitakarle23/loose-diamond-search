import { combineReducers } from 'redux';
import applyFetchProductsReducer from './applyFetchProductsReducer';
import applyLdsPropsReducer from './applyLdsPropsReducer';

const catalogReducer = combineReducers({
	applyLdsPropsReducer,
	products : applyFetchProductsReducer,
});

export default catalogReducer;