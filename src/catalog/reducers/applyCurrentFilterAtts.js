import _ from 'lodash'

import {
  SET_CURRENT_FILTER_ATTS,
} from '../actions/actionTypes'

// Do type casting
// Convert props into valid data type
function convertToType(v) {
  const cast = {
    page: Number,
    prodPerPage: Number,
    range: String,
    login: String,
    company: Number,
    category_ids: Number,
    purpose: String,
    priceOption: String,
    sortBy: String
  };
  return _.mapValues(v, function(value, key) {
    if (cast[key]) {
      return cast[key](value)
    }
    return value
  });
}

let initialState = {}

function applyCurrentFilterAtts(state = initialState, action) {
  let atts = convertToType(action.atts)
  switch (action.type) {

    case SET_CURRENT_FILTER_ATTS:
      return Object.assign({}, state, atts)

    default:
      return state
  }
}

export default applyCurrentFilterAtts;