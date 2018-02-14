import React, { Component } from 'react';
import Pagination from 'react-js-pagination';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { doSetCurrentFilterAtts } from '../actions/doCurrentFilterAtts';
import * as productsActions from '../actions/doFetchProducts';
import _ from 'lodash'

class ProductsPagination extends Component {
	constructor(props, context) {
    super(props, context);
    this.state = {
      activePage: this.props.activePage
    }
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidUpdate() {
    if (this.props.activePage) {
      this.setState({
        activePage: this.props.activePage
      })
    }
  }

  handlePageChange(pageNumber) {
    this.setState({
    	activePage: pageNumber
    });

    this.props.handleSelect(pageNumber);
  }

  render() {
  	let { totalProductCount } = this.props;
		let totalPages = Math.ceil(totalProductCount / 24);
    return (
      <div>
        <Pagination
          activePage={this.props.activePage}
          itemsCountPerPage={this.props.itemsPerPage}
          totalItemsCount={totalProductCount}
          pageRangeDisplayed={3}
          onChange={this.handlePageChange}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    itemsPerPage: state.catalogReducer.applyCurrentFilterAtts.prodPerPage,
    currentFilterAtts: state.catalogReducer.applyCurrentFilterAtts,
    activePage: state.catalogReducer.applyCurrentFilterAtts.page,
    totalProductCount: state.catalogReducer.products.totalProductCount,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSelect: (page) => {
      dispatch(doSetCurrentFilterAtts({
        page
      }))
      dispatch(productsActions.fetchProducts())
    }

  }
}
// An object of a certain type
ProductsPagination.propTypes = {
  activePage: PropTypes.number,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsPagination);
