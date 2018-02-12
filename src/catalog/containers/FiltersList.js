import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShapeList from '../components/Shapelist';
import SearchBar from '../components/SearchBar';
import RangeSlider from '../components/RangeSlider';

class FiltersList extends Component {

	render () {
		let { properties } = this.props;
		let {ldsProps} = properties;
		let ShapeListComponent;

    if(ldsProps) {
      ShapeListComponent = <ShapeList shapes={ldsProps.proptypes} />
    } else {
      ShapeListComponent = null
		}

		let RangeSliderComponent;

    if(ldsProps && ldsProps.proptypes) {
			RangeSliderComponent = ldsProps.proptypes.map((prop, i) => {

				return (
					<div key={i} id={`prop-${prop.name}`} className="custom-column-6">
						<RangeSlider prop={prop} />
					</div>
				)

			})

    } else {
      RangeSliderComponent = null
    }

	  return (
			<div>
				<SearchBar />
				{ShapeListComponent}
				{RangeSliderComponent}
			</div>
	  );
	}

}

export default FiltersList

