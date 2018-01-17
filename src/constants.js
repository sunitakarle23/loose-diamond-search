//Global variables
import _ from 'lodash'

// API root url
let getSession = () => {
	if (window.opt) {
		return window.opt.session
	}
	return {
	  "autofillusers": "",
	  "allowBIG": true,
	  "basketItems": "",
  	"priceNoPos": "wholesale",
		"pricePos": "retail",
		"purpose": "browsing",
		"catalogProductCompany": "AFFILIATED_ONLY",
	  "user": {
	    "login": "forevermark_super",
	    "email": "vasi@optcentral.com",
	    "companyName": "Forevermark",
	    "companyId": "2154",
	    "companyType": "2",
	    "referBrand": "true",
	    "userFirstName": "OPT",
	    "userLastName": "System Administrator",
	    "primaryResponsibility": "OPT Product Manager",
	    "id": "522",
	    "can_add_all_to_basket": true,
	    "roles": [
	      "ROLE_BRAND_FEEDBACK",
	      "ROLE_EMAIL",
	      "ROLE_PRINT",
	      "ROLE_RETAILSTYLE",
	      "ROLE_SOCIAL_SHARE",
	      "ROLE_BRAND_ORDER_REP",
	      "ROLE_REQUEST_INFO_FULL_ACCESS",
	      "ROLE_REQUEST_VIEWING_FULL_ACCESS",
	      "BRAND_LDS_ACCESS"
	    ],
	    "company": {
	      "premiumMessage": "no",
	      "basket": "yes",
	      "type": "2",
	      "url": "http://www.harrykotlar.com",
	      "logo": "logo_bnd_129.gif",
	      "smsFlag": "false",
	      "id": "129",
	      "retIntegration": ""
	    }
	  },
	  "brand": {
	    "id": "129",
	    "name": "OPT",
	    "logo": "logo_opt.gif",
	    "catalogMultiselect": "true",
	    "price": {
	      "step": "1000",
	      "max": "50000"
	    }
	  },
	  "facebook": {
	    "id": "",
	    "name": ""
	  },
	  "purpose": "POS",
	  "iPad": "false",
	  "iPhone": "false",
	  "isIE9": false,
	  "NewOrderFlow": "&oldOrder=false",
	  "ldsCompany": null
	};

}


export const API_ROOT_URL = process.env.REACT_APP_API_ROOT_URL
export const SESSION = getSession();

console.log('App @process.env =', process.env)
