
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  products: [],
  error: null,
  loading: false,
  totalProductCount: 0,
};
export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {

    case FETCH_PRODUCTS_REQUEST:// start fetching products and set loading = true
      return {
        ...state,
        products:[],
        error: null,
        loading: true,
        totalProductCount: 0,
      };

    case FETCH_PRODUCTS_SUCCESS: // return list of products and make loading = false
      return {
        ...state,
        products: action.payload.data.hashMap.products,
        totalProductCount: action.payload.data.hashMap.totalProductCount,
        error: null,
        loading: false
      };

    case FETCH_PRODUCTS_FAILURE:// return error and make loading = false
      error = action.payload || { message: action.payload.message };
      return {
        ...state,
        products: [],
        error: error,
        loading: false,
        totalProductCount: 0,
      };

    default:
      return state;
  }
}

