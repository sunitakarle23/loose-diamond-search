//action creator
import axios from 'axios';
import Helpers from '../../utils/helpers';
import $ from 'jquery';

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

const ROOT_URL = 'https://www.optcentral.com/optportal/services/brand/diamondsearch.json?' + $.param(params);

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
