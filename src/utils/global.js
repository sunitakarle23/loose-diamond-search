import { SESSION } from '../constants';
import Helpers from './helpers';
import _ from 'lodash';

function isPPCField() {
  if (!SESSION) {
    return
  }
  if(SESSION.purpose === 'browsing'){
    return true
  }else{
		 return false;
	}
}

function isAffiliated () {
  if (!SESSION) return;

  if(SESSION.catalogProductCompany === 'AFFILIATED_ONLY') {
    return true;
  } else {
    return false;
  }
}

function hasEmailRole (){
  if (_.indexOf(SESSION.user.roles, 'ROLE_EMAIL')) {
    return true;
  } else {
    return false;
  }
}

function hasPrintRole() {
  if (_.indexOf(SESSION.user.roles, 'ROLE_PRINT')) {
    return true;
  } else {
    return false;
  }
}

function hasBasketShown() {
  if (_.isUndefined(SESSION)) {
    return;
  }

  if (SESSION.user.company.type === '3') {
    return true;
  } else if (SESSION.user.company.basket === 'yes') {
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

export const IS_PPC = isPPCField();
export const IS_AFFILIATED = isAffiliated();
export const IS_EMAIL = hasEmailRole();
export const IS_PRINT = hasPrintRole();
export const IS_BASKET = hasBasketShown();

