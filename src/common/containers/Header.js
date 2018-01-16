import React, { Component } from 'react';
import { Row, Col, Button, ButtonToolbar, Image} from 'react-bootstrap';


class LDSHeader extends Component {

	render () {
		const headerActionBtns = (
			<ButtonToolbar>
				<Button id="toggleFilterMenu" bsStyle="primary">FILTERS</Button>
		    <Button className="hide-mobile-inline reset-search-filter">
		    	Reset
		    </Button>
		    <Button bsStyle="primary" className="addCompleteList-basket pull-right">
	        Add Entire Set of Results to Basket
	      </Button>
			</ButtonToolbar>
		);

	  return (
	  	<div id="header" className="header hidden-xs hidden-sm">
				<div className="container">
		  		<div className="logo">
		  			<Image className="lds-logo"  alt='brand logo' src="https://cdn.optcentral.com/optportal/logos/2154/logo_lds_2154.png" />
		  		</div>
		  		<Row>
		  			<Col md={12} className="hidden-xs hidden-sm">
		  				{headerActionBtns}
		  			</Col>
		  		</Row>
				</div>
			</div>
	  );
	}

}

export default LDSHeader;