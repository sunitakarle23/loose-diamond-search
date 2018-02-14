
import {
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE
} from '../actions/actionTypes';

const defaultSate = {
  products: [],
  loading: true,
  totalProductCount: 0,
  errors: []
};

function applyFetchProducts (state = defaultSate, action) {
  let error;
  switch(action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        products: action.payload.hashMap.products,
        totalProductCount: action.payload.hashMap.totalProductCount,
      })
    case FETCH_PRODUCTS_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        errors: action.payload ? action.payload.errors : ['Opps, blank response!']
      })

    default:
      return state;
  }
}

export default applyFetchProducts;

