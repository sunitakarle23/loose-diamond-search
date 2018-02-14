import {
	SET_DEFAULT_FILTER_ATTS
} from '../actions/actionTypes'
import { SESSION } from '../../constants';

let initialState = {
  page: 1,
  prodPerPage: 30,
  range: '0-0',
  login: SESSION.user.login,
  company: SESSION.user.companyId,
  category_ids: SESSION.categoryId,
  purpose: SESSION.purpose,
  priceOption: 'wholesale',
  sortBy: 'wholesale;desc'
}

function applyDefaultFilterAtts(state = initialState, action) {
  switch (action.type) {
    case SET_DEFAULT_FILTER_ATTS:
      return Object.assign({}, state, action.payload)

    default:
      return state;
  }

}

export default applyDefaultFilterAtts;
