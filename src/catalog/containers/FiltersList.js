import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShapeList from '../components/Shapelist';
import SearchBar from '../components/SearchBar';
import RangeSlider from '../components/RangeSlider';
import {
	doFetchLDSprops,
	doSuccessFetchLDSprops,
	doCancelFetchLDSprops
} from '../actions/doFetchLDSprops';

class FiltersList extends Component {

	componentDidMount (){
		this.props.getLDSprops();
	}

	render () {
		let ldsProps = this.props.response.ldsProps;
		
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

const mapStateToProps = (state) => {
  return {
    response: state.catalogReducer.ldsProps
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getLDSprops: () => {
     	return new Promise ((resolve, reject) => {
	      let response = dispatch(doFetchLDSprops());
	      response.payload.then((payload) =>  {
      	  dispatch(doSuccessFetchLDSprops(payload));
      	  resolve();
				}).catch((payload) => {
	        dispatch(doCancelFetchLDSprops(payload));
	        reject(payload.data);
	      });
	    });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FiltersList);

