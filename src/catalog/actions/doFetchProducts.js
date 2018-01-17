//action creator
import axios from 'axios';
import { API_ROOT_URL } from '../../constants';
//import Helpers from '../../utils/helpers';
import queryString from 'query-string';

import {
	FETCH_PRODUCTS_REQUEST,
	FETCH_PRODUCTS_SUCCESS,
	FETCH_PRODUCTS_FAILURE,
} from './actionTypes';

const params = {
  page: 1,
  prodPerPage: 30,
  range: '0-0',
  login: 'forevermark_SUPER',
  company: 2154,
  category_ids: 1965,
  purpose: 'browsing',
  priceOption: 'wholesale',
  sortBy: 'wholesale;desc'
}

const queryParams = queryString.stringify(params);
const ROOT_URL = `${API_ROOT_URL}/optportal/services/brand/diamondsearch.json?` + queryParams;

export function doFetchProducts() {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}`,
  });

  return {
    type: FETCH_PRODUCTS_REQUEST,
    payload: request
  };
}

export function doSuccessFetchProducts(products) {

  //Helpers.parseProducts(products.data);
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
