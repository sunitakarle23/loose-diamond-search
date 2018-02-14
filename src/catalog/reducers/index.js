import { combineReducers } from 'redux';
import applyFetchProducts from './applyFetchProducts';
import applyLdsPropsReducer from './applyLdsPropsReducer';
import applyDefaultFilterAtts from './applyDefaultFilterAtts';
import applyCurrentFilterAtts from './applyCurrentFilterAtts';

const catalogReducer = combineReducers({
	applyLdsPropsReducer,
	applyDefaultFilterAtts,
	applyCurrentFilterAtts,
  products: applyFetchProducts,
});

export default catalogReducer;