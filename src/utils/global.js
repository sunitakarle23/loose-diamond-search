import Helpers from './helpers';
import _ from 'lodash';
import { SESSION } from '../constants';

const isPPCField =() => {
  if (!SESSION) return;

	if(SESSION.purpose === 'browsing'){
		return true
	}else{
		 return false;
	}
}

const isAffiliated = () => {
  if (!SESSION) return;

  if(SESSION.catalogProductCompany === 'AFFILIATED_ONLY') {
    return true;
  } else {
    return false;
  }
}

const hasEmailRole = () => {
  if (_.contains(SESSION.user.roles, 'ROLE_EMAIL')) {
    return true;
  } else {
    return false;
  }
}

const hasPrintRole = () => {

  if (_.contains(SESSION.user.roles, 'ROLE_PRINT')) {
    return true;
  } else {
    return false;
  }
}

const hasBasketShown = () =>  {
  if (_.isUndefined(SESSION.session)) {
    return;
  }

  if (SESSION.session.user.company.type === '3') {
    return true;
  } else if (SESSION.session.user.company.basket === 'yes') {
    return true;
  } else {
    return false;
  }
}

export const PARSE_PRODUCT_PRICE = (hash) => {
  var r = {
    retailPrice: null,
    wholesalePrice: null
  };

  if (_.isNull(hash.retailPrice) && _.isNull(hash.wChipher)) {
    //Return as is
    return r;
  }

  if (hash.retailPrice) {
    r.retailPrice = Helpers.getFormattedCurrency(hash.retailPrice);
  }

  if (hash.wChipher) {
    var d = Number(atob(hash.wChipher));
    r.wholesalePrice = Helpers.getFormattedCurrency(d);
  }

  return r;
}

export const IS_PPC = isPPCField()
export const IS_AFFILIATED = isAffiliated()
export const IS_EMAIL = hasEmailRole()
export const IS_PRINT = hasPrintRole()
export const IS_BASKET = hasBasketShown()

