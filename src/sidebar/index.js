import React, { Component } from 'react';
import FiltersList from './containers/FiltersList';
import { Grid, Row, Col } from 'react-bootstrap';
import './sidebar.css';

class Sidebar extends Component {
  componentDidMount() {

  }

	render () {
	  return (
	    <div id="sidebar" className="sidebar">
        <div className="search-header">
          Search by The Following Criteria
        </div>
        <FiltersList />
  		</div>
	  );
	}

}



export default Sidebar;