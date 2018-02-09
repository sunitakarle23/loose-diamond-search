import React, { Component } from 'react';
import { mappedNameProps } from '../../constants';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class SearchBar extends Component {

  constructor (props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
  } 

  onInputChange (event) {
    console.log('inside', event.charCode);
    if (event.charCode != 45) {
      return;
    }
  }

	render () {
    let prop = this.props.prop;
	  return (
      <div className='rangeslider-wrapper'>
        <div id="accordion-{prop.id}" className="lds-sidebar-accordion" data-type="{prop.name}">
  
          <h4 className="accordion-toggle" data-parent="#accordion-{prop.id}" href="#collapse-{prop.id}">
            <span>{prop.diplayName}</span>
          </h4>

          <div id="collapse-{id}" className="">
            <div className="scroll">
            
                <div className="row decimal-slider-wrap">
                  <div className="col-xs-5">
                    <input type="number" step="0.1" onKeyPress={ event => this.onInputChange(event) } min="0" className="form-control range-min range-input pull-left margin-top10" placeholder="Min" />
                  </div>
                  <div className="col-xs-2 text-center">
                    <div className="mid-to">To</div>
                  </div>
                  <div className="col-xs-5">
                    <input type="number" step="0.1" onKeyPress={ event => this.onInputChange(event) } min="0" className="form-control range-max range-input pull-right margin-top10" placeholder="Max" />
                  </div>
                </div>
              
            </div>
          </div>

        </div>
      </div>
    );
	}

}

export default SearchBar;

