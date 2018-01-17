import React, { Component } from 'react';
import _ from 'lodash';

class ShapeList extends Component {

  constructor (props) {
    super(props);
  }
  
	render () {
    console.log('shapes render====>',this.props.shapes);

    // if(!this.props.shapes) {
    //   return <div>loading</div>
    // }

    // const { ldsProps } = this.props.shapes;
    // let shapes = _.find(ldsProps, function(prop) { return prop.name == 'shape'; });
    
    // let shapelist = shapes.map((shape, i) => {
    //   return (
    //     <div key={shape.mapping} id="shape-{shape.mapping}" class="custom-column-6">
    //       <a href="#" data-shape="{shape.mapping}" data-associated="">
    //         <img class="img-responsive" src="https://cdn.optcentral.com/optportal/images/lds/shape_thumbnails/{shape.mapping}.png" />
    //       </a>
    //     </div>
    //   )
    // })

	  // return (
  	//  	<div>
  	//  		<div  id="accordion-diamond-shapes" class="lds-sidebar-accordion">
    //         <h4 class="accordion-toggle" data-parent="#accordion-diamond-shapes" href="#collapse-diamond-shapes">
    //             <span>Diamond Shapes</span>
    //         </h4>
    //       <div id="collapse-diamond-shapes" class="">
    //         <div class="custom-row clearfix">
    //           {shapelist}
    //         </div>
    //       </div>
    //     </div>
  	//  	</div>
    // );
    return null;
	}

}

export default ShapeList;

