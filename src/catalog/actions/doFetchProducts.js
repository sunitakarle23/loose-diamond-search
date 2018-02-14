//action creator
import axios from 'axios';
import { API_ROOT_URL } from '../../constants';
import queryString from 'query-string';

import {
	FETCH_PRODUCTS_SUCCESS,
	FETCH_PRODUCTS_FAILURE,
} from './actionTypes';

export function doSuccessFetchProducts(products) {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products
  };
}

export function doCancelFetchProducts(error) {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error
  };
}

export const fetchProducts = () => {
  return (dispatch, getState, store) => {
    let catalogState = getState().catalogReducer;
    let oldAtts = catalogState.applyDefaultFilterAtts;
    let newAtts = catalogState.applyCurrentFilterAtts;

    let atts = Object.assign({}, oldAtts, newAtts);
    let q = queryString.stringify(atts, {
      arrayFormat: 'index'
    });

    let ROOT_URL = `${API_ROOT_URL}/optportal/services/brand/diamondsearch.json?${q}`;

    return axios.get(ROOT_URL)
    .then(response => {
      // Handle data with sync action
      dispatch(doSuccessFetchProducts(response.data));
    })
    .catch(error => {
      dispatch(doCancelFetchProducts(error))
    });
  };
};1
