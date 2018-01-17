import React, { Component } from 'react';
import _ from 'lodash';

class ShapeList extends Component {

  constructor (props) {
    super(props);
  }

	render () {
    console.log('shapes render====>',this.props.shapes);
    const  ldsProps = this.props.shapes;

    if(!ldsProps) {
      return <div>loading</div>
    }

    let shapes = _.find(ldsProps, function(prop) {
      return prop.name == 'shape';
    });

    const shapelist = Object.keys(shapes).map((shape, i) => {
      return (
        <div key={i} id="shape-{shape.mapping}" className="custom-column-6">
          <a href="#" data-shape="{shape.mapping}" data-associated="">
            <img className="img-responsive" src="https://cdn.optcentral.com/optportal/images/lds/shape_thumbnails/{shape.mapping}.png" />
          </a>
        </div>
      )
    })

	  return (
  	 	<div>
  	 		<div  id="accordion-diamond-shapes" className="lds-sidebar-accordion">
          <h4 className="accordion-toggle" data-parent="#accordion-diamond-shapes" href="#collapse-diamond-shapes">
              <span>Diamond Shapes</span>
          </h4>
          <div id="collapse-diamond-shapes" className="">
            <div className="custom-row clearfix">
              {shapelist}
            </div>
          </div>
        </div>
  	 	</div>
    );
	}

}

export default ShapeList;

