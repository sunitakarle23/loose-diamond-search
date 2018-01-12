import React, { Component } from 'react';
import Sidebar from '../common/containers/Sidebar';
import Products from './containers/Products';
import { Row, Col } from 'antd';
import './catalog.css';

class Catalog extends Component {

	render () {
	  return (
  	  <div>
  		  <Col lg={8} xl={8}>
          <Sidebar />
        </Col>
        <Col  xs={24} lg={16} xl={16}>
        	<Products />
        </Col>
  		</div>
	  );
	}

}

export default Catalog;