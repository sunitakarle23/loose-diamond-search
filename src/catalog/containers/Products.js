import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import * as productsActions from '../actions/doFetchProducts';
import ProductList from '../components/ProductList';
import ProductPagination from '../components/Pagination';

class Products extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount () {
		this.props.fetchProducts();
	}

	render () {
		let { loading } = this.props;
    console.log("loading", loading);
    let content = '';
    if (loading) {
      content = (
        <h3 className="products-loader">
          <FontAwesome name="spinner fa-spin fa-2x" />
        </h3>
      )
    } else if (!this.props.productsList) {
      content = (
        <div className="alert alert-info ">
          No Products(s) found.
        </div>
      )
    }

    if (content) {
      return content;
    }

		let { totalProductCount } = this.props;
	  return (
  	  <div>
	  	  <div id="contentPart">
					<Row className="results-area">
				    <Col xs={12}>
				      <p className="results-para">
				        <strong>Results: </strong>{totalProductCount} diamond(s)
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
    totalProductCount: state.catalogReducer.products.totalProductCount,
    default_atts : state.catalogReducer.applyDefaultFilterAtts,
    current_atts: state.catalogReducer.applyCurrentFilterAtts,
    loading: state.catalogReducer.products.loading,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(productsActions.fetchProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
