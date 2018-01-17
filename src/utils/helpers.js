import _ from 'lodash';
import { SESSION } from '../constants'


// Price display options
const CURRENCY_SEPERATOR = ','
const CURRENCY = '$';

const Helpers = {
	getFormattedCurrency: function (number) {

		if (!number) {
			return
		}
    number = _.toString(number)
		number = number.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + CURRENCY_SEPERATOR);
		number = `${CURRENCY}${number}`;
		return number
	},

	removeByKey: function (Obj, deleteKey) {
		return Object.keys(Obj)
			.filter(key => key !== deleteKey)
			.reduce((result, current) => {
				result[current] = Obj[current];
				return result;
			}, {});
	},

	getColorProperty: function(filteredPropertyList){
    var propminantPropList = ['lds_display_value_color'];
    var t = {};
    _.each(filteredPropertyList, function(propHash, key, list) {
      propHash.value = _.trim(propHash.value);
      if (_.indexOf(propminantPropList, propHash.type_value) > -1 && propHash.value) {
        t = propHash;
      }
    });

    (! t.value) ? '' : t.value;

    return t.value;
  },

  decimalFractionFormat: function(val) {
	  var n,value;
	  if(val){
	    n =  parseFloat(val);
	    value = parseFloat(Math.round(n * 100) / 100).toFixed(2);
	    return value;
	  }
	},

	GET_PRODUCT_PRICE: function(RETAIL_PRICE, WHOLESALE_PRICE, echoLabel) {

    //Return Call for pricing
    var HAS_RETAIL = !(_.isUndefined(RETAIL_PRICE) || _.isNull(RETAIL_PRICE));
    var HAS_WHOLESALE = !(_.isUndefined(WHOLESALE_PRICE) || _.isNull(WHOLESALE_PRICE));

    if (!HAS_RETAIL && !HAS_WHOLESALE) {
      if (echoLabel) {
        return 'MSRP: <b>Pricing Upon Request</b>';
      } else {
        return 'Pricing Upon Request';
      }
    }

    var pMap = {
      retail: '',
      wholesale: '',
      'wholesale:retail': '',
      'retail:wholesale': ''
    };

    var lMap = _.clone(pMap);

    //Validations added
    if (RETAIL_PRICE) {
      pMap['retail'] = RETAIL_PRICE;
      pMap['wholesale:retail'] = RETAIL_PRICE;
      pMap['retail:wholesale'] = RETAIL_PRICE;

      lMap['retail'] = '<b>MSRP:</b><br/>' + RETAIL_PRICE;
      lMap['wholesale:retail'] = '<b>MSRP:</b> <br/>' + RETAIL_PRICE;
      lMap['retail:wholesale'] = '<b>MSRP:</b> <br/>' + RETAIL_PRICE;
    }
    if (WHOLESALE_PRICE) {
      pMap['wholesale'] = WHOLESALE_PRICE;
      pMap['wholesale:retail'] = WHOLESALE_PRICE;
      pMap['retail:wholesale'] = WHOLESALE_PRICE;

      lMap['wholesale'] = '<b>W/S:</b> <br/>' + WHOLESALE_PRICE;
      lMap['wholesale:retail'] = '<b>W/S:</b> <br/>' + WHOLESALE_PRICE;
      lMap['retail:wholesale'] = '<b>W/S:</b><br/> ' + WHOLESALE_PRICE;
    }
    if (RETAIL_PRICE && WHOLESALE_PRICE) {
      pMap['wholesale:retail'] = WHOLESALE_PRICE + ' / ' + RETAIL_PRICE;
      pMap['retail:wholesale'] = RETAIL_PRICE + ' / ' + WHOLESALE_PRICE;

      lMap['wholesale:retail'] = '<b>W/S:</b> <br/>' + WHOLESALE_PRICE + '<br/> <b>MSRP:</b><br/> ' + RETAIL_PRICE;
      lMap['retail:wholesale'] = '<b>MSRP:</b> <br/>' + RETAIL_PRICE + '<br/> <b>W/S:</b><br/> ' + WHOLESALE_PRICE;
    }

    var t = 0,
      cMap = echoLabel ? lMap : pMap;
    switch (SESSION.purpose) {
      case 'POS':
        //If company configuration/setting present
        if (!_.isNull(SESSION.pricePos) && SESSION.pricePos) {
          t = cMap[SESSION.pricePos];
        } else {
          //else as per requirment - show retail price
          t = cMap['retail'];
        }

        break;
      default:
        //If company configuration/setting present
        if (!_.isNull(SESSION.priceNoPos) && SESSION.priceNoPos) {

          t = cMap[SESSION.priceNoPos];
        } else {
          //else as per requirment - show retail price

          //Priority from low to High
          if (RETAIL_PRICE) {
            t = cMap['retail'];
          }
          if (WHOLESALE_PRICE) {
            t = cMap['wholesale'];
          }
          if (RETAIL_PRICE && WHOLESALE_PRICE) {
            t = cMap['wholesale:retail'];
          }
        }

        break;
    }
    if (!t) {
      return 'Pricing Upon Request';
    }

    return t;
  },



  parseProducts: function(response) {

  },

  hasEmailRole: function(options) {
	  if (_.contains(SESSION.user.roles, 'ROLE_EMAIL')) {
	    return true;
	  } else {
	  	return false;
	  }
	},

	hasPrintRole: function(options) {

	  if (_.contains(SESSION.user.roles, 'ROLE_PRINT')) {
	    return true;
	  } else {
	  	return false;
	  }
	},

	hasBasketShown: function() {
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
	},

}

export default Helpers;
