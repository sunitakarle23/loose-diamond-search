import React, { Component } from 'react';

import { Layout } from 'antd';
const { Header } = Layout;

class LDSHeader extends Component {

	render () {

	  return (
  	  <Header>
		  	<div id="header" className="header">
		  		<div className="logo">
		  			<img class="lds-logo" src="https://cdn.optcentral.com/optportal/logos/2154/logo_lds_2154.png" />
		  		</div>
				</div>
			</Header>
	  );
	}

}

export default LDSHeader;