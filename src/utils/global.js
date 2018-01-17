import Helpers from './helpers';
import _ from 'lodash';

const LDS = {
  
	isPPCField: function(){
		if(this.session.purpose === 'browsing'){
			return true
		}else{
			 return false;
		}
	},

	PARSE_PRODUCT_PRICE: function(hash) {
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
  },

}

export default LDS;
