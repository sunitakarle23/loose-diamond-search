import React, { Component } from 'react';
import { mappedNameProps } from '../../constants';
import { Link } from 'react-router-dom';

class SearchBar extends Component {

  constructor (props) {
    super(props);

    // this.getImageMapping = this.getImageMapping.bind(this);
  } 

	render () {

	  return (
      <div className='searchbar-wrapper'>
        <div className="search-block hide-mobile">
          <button id="search-button" className="btn btn-primary text-center">
            search
          </button>
        </div>
        <div className="search-box-view">
          <div className="form-group">
            <input type="text" name="search" className="form-control" placeholder="Search By Lot#" />
          </div>
        </div>
      </div>
    );
	}

}

export default SearchBar;

