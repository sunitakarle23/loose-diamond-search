import {
	SAVE_LDS_PROPERTIES
} from '../actions/actionTypes'

let initialState = {
  properties: [],
}

function applyLdsProperties(state = initialState, action) {
  switch (action.type) {
    case SAVE_LDS_PROPERTIES:
      return Object.assign({}, state, action.payload)

    default:
      return state;
  }

}

export default applyLdsProperties;