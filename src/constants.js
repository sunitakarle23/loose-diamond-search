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
		"iosApp" : false,
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
	  "ldsCompany": 2154,
	  "categoryId": 1965,
	};
}

let getMappedNameProps = () => {
	let mappedNameProps = {};
	// child shapes are put first
	mappedNameProps['shape'] = [{
			code: 'BL_RD',
			name: 'Black Label Round',
			image: 'Black Label Round.png',
			associated: ['BL ROUND', 'IDEAL RD', 'BLACK LABEL ROUND']
		}, {
			code: 'RD',
			name: 'Round',
			image: 'Round.png',
			associated: ['RD', 'RND', 'BR', 'BL ROUND', 'ROUND', 'RB'],
		}, {
			code: 'F_CUS',
			name: 'FireCushion®',
			image: 'FireCushion.png',
			associated: ['FC', 'FIRECUSHION']
		}, {
			code: 'BL_CUS',
			name: 'Black Label Cushion',
			image: 'Black Label Cushion.png',
			associated: ['BL CUSHION', 'IDEAL CUSHION', 'BLACK LABEL CUSHION'],
		}, {
			code: 'CUS',
			name: 'Cushion',
			image: 'Cushion.png',
			associated: ['CUS', 'CU', 'CUSHION', 'BL CUSHION', 'IDEAL CUSHION', 'ICN', 'CB', 'FC', 'FIRECUSHION', 'CMB']
		}, {
			code: 'BL_OV',
			name: 'Black Label Oval',
			image: 'Black Label Oval.png',
			associated: ['BL OVAL', 'IDEAL OVAL', 'BLACK LABEL OVAL']
		}, {
			code: 'OV',
			name: 'Oval',
			image: 'Oval.png',
			associated: ['OV', 'OVAL', 'BL OVAL', 'OVA']
		}, {
			code: 'F_MARK',
			name: 'FirePrincess®',
			image: 'FireMark.png',
			associated: ['FI', 'FIREMARK', 'FIREPRINCESS']
		}, {
			code: 'BL',
			name: 'Black Label Square',
			image: 'Black Label Square.png',
			associated: ['BL SQUARE', 'IDEAL SQUARE', 'SQ', 'ISQ', 'BLACK LABEL SQUARE']
		}, {
			code: 'PR',
			name: 'Princess',
			image: 'Princess.png',
			associated: ['PR', 'PRI', 'PRINCESS', 'BL SQUARE', 'CUT CORNER PRINCESS', 'IDEAL SQUARE', 'SQ', 'ISQ', 'FI', 'PC']
		},

		// https://basecamp.com/2368312/projects/7688643/todos/324092466#comment_560396372
		// Support added to show associated codes name and his own image
		// if name/image mapping for associated code is present
		// then it will pick up respective name/image
		// otherwise `DEFAULT` is used

		{
			code: 'AC',
			name: {
				SQEM: 'Square Emerald Cut',
				DEFAULT: 'Asscher'
			},
			image: {
				SQEM: 'Asscher.png',
				DEFAULT: 'Asscher.png'
			},
			associated: ['AC', 'AS', 'ASSCHER', 'SQEM']
		}, {
			code: 'EC',
			name: 'Emerald',
			image: 'Emerald.png',
			associated: ['EC', 'EM', 'EMERALD', 'SQEC']
		}, {
			code: 'RA',
			name: 'Radiant',
			image: 'Radiant.png',
			associated: ['RA', 'RAD', 'RADIANT']
		}, {
			code: 'PS',
			name: 'Pear',
			image: 'Pear.png',
			associated: ['PS', 'PEA', 'PEAR']
		}, {
			code: 'HR',
			name: 'Heart',
			image: 'Heart.png',
			associated: ['HR', 'HS', 'HEART']
		}, {
			code: 'FA',
			name: 'Fancy Shape',
			image: 'Fancy Shape.png',
			associated: ['FAN', 'FANCY' ,'FANCY SHAPE']
		}, {
			code: 'KC',
			name: 'Kotlar Cushion',
			image: 'Kotlar Cushion.png',
			associated: ['KOTLAR CUSHION']
		}, {
			code: 'OC',
			name: 'Octagon',
			image: 'Octagon.png',
			associated: ['OCTAGON']
		}, {
			code: 'RC',
			name: 'Rose',
			image: 'Rose.png',
			associated: ['ROSE']
		}, {
			code: 'TR',
			name: 'Trilliant',
			image: 'Trilliant.png',
			associated: ['TRILLIANT']
		}, {
			code: 'TRA',
			name: 'Trapezoid',
			image: 'Trapezoid.png',
			associated: ['TRAPEZOID']
		}, {
			code: 'MQ',
			name: 'Marquise',
			image: 'Marquise.png',
			associated: ['MQ', 'MARQUISE']
		}, {
			code: 'CB',
			name: 'Cushion Brilliant',
			image: 'Cushion Brilliant.png',
			associated: ['CUSHION BRILLIANT']
		}, {
			code: 'RB',
			name: 'Round Brilliant',
			image: 'Round Brilliant.png',
			associated: ['ROUND BRILLIANT']
		}, {
			code: 'SQEC',
			name: 'Square Emerald Cut',
			image: 'Emerald.png',
			associated: ['SQEC', 'SQUARE EMERALD CUT']
		}, {
			code: 'ASHOKA',
			name: 'Ashoka',
			image: 'Ashoka.png',
			associated: ['AK', 'ASHOKA']
		}, {
			code: 'DEVR',
			name: 'Devotion Round',
			image: 'Devotion Round.png',
			associated: []
		}, {
			code: 'DEVC',
			name: 'Devotion Cushion',
			image: 'Devotion Cushion.png',
			associated: []
		}, {
			code: 'DEVS',
			name: 'Devotion Square',
			image: 'Devotion Square.png',
			associated: []
	}];
	return mappedNameProps;
}

export const API_ROOT_URL = process.env.REACT_APP_API_ROOT_URL
export const SESSION = getSession();
export const mappedNameProps = getMappedNameProps();

console.log('App @process.env =', process.env)
