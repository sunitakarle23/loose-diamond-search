
import {
  FETCH_PROPS_REQUEST,
	FETCH_PROPS_SUCCESS,
	FETCH_PROPS_FAILURE,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  ldsProps: [],
  error: null,
  loading: false,
};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {

    case FETCH_PROPS_REQUEST:// start fetching products and set loading = true

      return Object.assign({}, state, {
        ldsProps: [],
        loading: true
      });


    case FETCH_PROPS_SUCCESS: // return list of products and make loading = false

      return Object.assign({}, state, {
        ldsProps: action.payload.data.hashMap,
        loading: false,
        error: null,
      });

    case FETCH_PROPS_FAILURE:// return error and make loading = false

      error = action.payload || { message: action.payload.message };
      return Object.assign({}, state, {
        ldsProps: [],
        loading: false,
        error: error,
      });

    default:
      return state;
  }
}

