import React, { Component } from 'react';
import { Pagination } from 'react-bootstrap';

class ProductPagination extends Component {
	constructor(props) {
		super(props);
	}

	render() {


		let { pages } = this.props;
		let items = [];

		return(
			<div id="productPagination">
				<Pagination bsSize="medium">

				</Pagination>
			</div>
		);
	}
}

export default ProductPagination;