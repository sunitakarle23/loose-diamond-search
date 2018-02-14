import {
  SET_DEFAULT_FILTER_ATTS
} from './actionTypes';


export function doDefaultFilterAtts(attr) {
  return {
    type: SET_DEFAULT_FILTER_ATTS,
    attr
  };
}