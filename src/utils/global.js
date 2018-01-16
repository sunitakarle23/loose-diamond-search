import React from 'react';

const Globals = {
	session: {
		priceNoPos: "wholesale",
		pricePos: "retail",
		purpose: "browsing",
		catalogProductCompany: "AFFILIATED_ONLY",
		categoryId: 1965,
		users: {
			company:{
				premiumMessage: "no",
				basket: "yes",
				type: "2",
				url: "http://www.forevermark.com",
				logo: "logo_bnd_2154.gif"
			},
			companyId:"2154",
			companyName:"Forevermark",
			companyType:"2",
			email:"support@optcentral.com",
			id:"12311",
			login:"forevermark_SUPER",
			primaryResponsibility:"OPT Product Manager",
			referBrand:"false",
			roles:["ROLE_BRAND_FEEDBACK", "ROLE_EMAIL", "ROLE_PRINT", "ROLE_RETAILSTYLE", "ROLE_REQUEST_INFO_FULL_ACCESS", "ROLE_REQUEST_VIEWING_FULL_ACCESS", "ROLE_SPECIAL_ORDER_FULL_ACCESS", "BRAND_LDS_ACCESS"],
			userFirstName:"Justin",
			userLastName:"Gould"
		}
	},

	isPPCField: function(){
		if(this.session.purpose == 'browsing'){
			return true
		}else{
			 return false;
		}
	}



}

export default Globals;
