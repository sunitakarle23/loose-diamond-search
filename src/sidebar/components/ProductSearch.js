import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class SearchProduct extends Component {
	render() {
		return(
			<div className=" ">
				<div className="search-block hide-mobile">
		  		<Button id="search-button" className="btn btn-primary text-center">
		    		search
		    	</Button>
		    </div>
				<div className="search-box-view"><div className="form-group">
					<input type="text" name="search" className="form-control" placeholder="Search By Inscription Number" />
				</div>
			</div>
		);
	}
}

export default SearchProduct;