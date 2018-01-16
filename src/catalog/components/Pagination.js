import React, { Component } from 'react';
import { Pagination } from 'react-bootstrap';

class ProductPagination extends Component {
	render() {
		return(
			<div id="productPagination">
				<Pagination bsSize="medium">
				</Pagination>
			</div>
		);
	}
}

export default ProductPagination;