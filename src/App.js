import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { SESSION } from './constants';
import _  from 'lodash'
import queryString from 'query-string';
import Catalog from './catalog'
import LDSHeader from './common/containers/Header'
import { API_ROOT_URL } from './constants'

import {
	doGetLdsProperties
} from './common/actions/doGetLdsProperties'

let LDS = {}
class App extends Component {
	getLDSConfigs() {
		if (!LDS) return;
		let lds = LDS.session;
		let params = {
      login: lds.user.login,
      lds: true,
      company: lds.user.companyId,
      lds_type: 'standard',
      purpose: lds.purpose
    }

    let q = queryString.stringify(params, {
			arrayFormat: 'index'
		});

		//let url = `${API_ROOT_URL}/optportal/services/brand/getldsPropertytypes.json?${q}`;

		//to avoid allow access origin  use diff url to access data temprary
			let url = `https://raw.githubusercontent.com/sanketj14/Backbone-crud-app/master/getldspropertytypes.json?${q}`

		//fetch lds properties

		axios.get(url)
	  .then(function (response) {
	    this.props.doGetLdsProperties(response.hashMap)
	  })
	  .catch(function (error) {
	    console.log(error);
	  });

	}
	bootstrapLdsApp () {
		if (!LDS) return;
		let { companyId } = LDS.session;
		let companyLogo = 'https://cdn.optcentral.com/optportal/logos/'+ companyId + '/logo_lds_'+ companyId +'.png';

	}

	setDefaultLdsApp() {
		console.log("@@@@App session ====>", SESSION);
		var options = {};

    if(_.isUndefined(SESSION)){
    	return;
    }

    var pIdsArr = SESSION.basketItems ? _.compact(SESSION.basketItems.split(',')) : [];
    pIdsArr = _.map(pIdsArr, Number);

    options = {
      session: SESSION,
      data: {
        iosApp: SESSION.iosApp || false,
        emailSuggestions: SESSION.emailSuggestions || '',
        basketProductIds: pIdsArr
      }
    };
    LDS = _.extend(LDS, options);
		this.bootstrapLdsApp();
	}

	componentDidMount() {
		this.setDefaultLdsApp(SESSION);
		console.log("@@@ default options=>", LDS);
		this.getLDSConfigs();
	}
	render() {
		return (
			<div className="App">
      	<LDSHeader />
	      <div className="wrap">
          <Catalog properties={ this.props.properties } />
        </div>
      </div>
		)
	}
}

const mapStateToProps = (state) => {
  return {
  	properties: state.commonReducer.applyLdsProperties
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getLdsProps: (res) => {
    	dispatch(doGetLdsProperties(res))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);