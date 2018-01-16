import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import {
	doFetchProducts,
	doSuccessFetchProducts,
	doCancelFetchProducts
} from '../actions/doFetchProducts';

import ProductList from '../components/ProductList';
import ProductPagination from '../components/Pagination';

class Products extends Component {
	componentDidMount () {
		this.props.fetchProducts()
	}

	render () {
	  return (
  	  <div>
	  	  <div id="contentPart">
					<Row className="results-area">
				    <Col xs={12}>
				      <p className="results-para">
				        <strong>Results: </strong>{this.props.totalProductCount} diamond(s)
				      </p>
				    </Col>
			    </Row>
	        <ProductList products = {this.props.productsList.products} />
	        <ProductPagination />
				</div>
  		</div>
	  );
	}

}
const mapStateToProps = (state) => {
  return {
    productsList: state.catalogReducer.products,
    totalProductCount: state.catalogReducer.products.totalProductCount
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => {
     	return new Promise ((resolve, reject) => {
	      let response = dispatch(doFetchProducts());
	      response.payload.then((payload) =>  {
      	  dispatch(doSuccessFetchProducts(payload));
      	  resolve();
				}).catch((payload) => {
	        dispatch(doCancelFetchProducts(payload));
	        reject(payload.data);
	      });
	    });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
