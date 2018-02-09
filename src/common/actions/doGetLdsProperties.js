import { SAVE_LDS_PROPERTIES }  from './actionTypes';

export function doGetLdsProperties(payload) {
	return {
    type: SAVE_LDS_PROPERTIES,
    payload
  };
}

