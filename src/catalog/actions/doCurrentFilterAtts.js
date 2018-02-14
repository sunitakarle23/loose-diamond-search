import {
  SET_CURRENT_FILTER_ATTS
} from './actionTypes';


export function doSetCurrentFilterAtts(atts) {
  return {
  	type: SET_CURRENT_FILTER_ATTS,
  	atts
  }
}
