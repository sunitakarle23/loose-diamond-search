//action creator
import axios from 'axios';
import queryString from 'query-string';
import GLOBALS from '../../utils/global';
import {
	FETCH_PROPS_REQUEST,
	FETCH_PROPS_SUCCESS,
	FETCH_PROPS_FAILURE,
} from './actionTypes';

const ROOT_URL = 'https://raw.githubusercontent.com/sanketj14/Backbone-crud-app/master/getldspropertytypes.json';

const { session } = GLOBALS;

const params = {
  login: session.users.login,
  lds: true,
  company: session.users.companyId,
  lds_type: 'standard',
  purpose: session.purpose
}

const queryParams = queryString.stringify(params);

export function doFetchLDSprops() {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}`,
  });

  return {
    type: FETCH_PROPS_REQUEST,
    payload: request
  };
}

export function doSuccessFetchLDSprops(ldsProps) {
  return {
    type: FETCH_PROPS_SUCCESS,
    payload: ldsProps
  };
}

export function doCancelFetchLDSprops(error) {
  return {
    type: FETCH_PROPS_FAILURE,
    payload: error
  };
}
