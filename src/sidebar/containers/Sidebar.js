import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShapeList from '../components/Shapelist';
import {
	doFetchLDSprops,
	doSuccessFetchLDSprops,
	doCancelFetchLDSprops
} from '../actions/doFetchLDSprops';

class Sidebar extends Component {

	constructor (props) {
		super(props);
	}

	componentDidMount (){
		this.props.getLDSprops();
	}

	render () {

		let shapelistComponent;
    if(this.props.response.ldsProps) {
      shapelistComponent = <ShapeList shapes={this.props.response.ldsProps.proptypes} />
    } else {
      shapelistComponent = null
    }

	  return (
  	 	<div>
  	 		<h2>Sidebar</h2>
  	 		{shapelistComponent}
  	 	</div>
	  );
	}

}

const mapStateToProps = (state) => {
  return {
    response: state.sidebarReducer.ldsProps
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

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

