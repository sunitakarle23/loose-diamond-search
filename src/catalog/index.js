import React, { Component } from 'react';
import Products from './containers/Products';
import FiltersList from './containers/FiltersList';
import { Grid, Row, Col } from 'react-bootstrap';
import './catalog.css';

class Catalog extends Component {
  constructor(props) {
    super(props);
  }

	render () {
    let { ldsProps } = this.props;
    if( !ldsProps ) return null;

	  return (
  	  <div>
         <Grid fluid id="catalog-container">
          <Row>
            <Col xs={12} md={3}>
              <div className="sidebar-wrapper">
                <div id="sidebar" className="sidebar">
                  <div className="search-header">
                    Search by The Following Criteria
                  </div>
                  <FiltersList properties={ldsProps} />
                </div>
              </div>
            </Col>
            <Col xs={12} md={9}>
              <Products />
            </Col>
          </Row>
        </Grid>
  		</div>
	  );
	}

}



export default Catalog;
