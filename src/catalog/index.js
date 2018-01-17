import React, { Component } from 'react';
import Sidebar from '../sidebar';
import Products from './containers/Products';
import { Grid, Row, Col } from 'react-bootstrap';
import './catalog.css';

class Catalog extends Component {
  componentDidMount() {

  }

	render () {
    console.log(this.props);
	  return (
  	  <div>
         <Grid id="catalog-container">
          <Row>
            <Col xs={12} md={3}>
              <Sidebar />
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
