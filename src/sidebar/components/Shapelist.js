import React, { Component } from 'react';
import _ from 'lodash';

class ShapeList extends Component {

	render () {
    const shapes = this.props.shapes;

    if(!shapes) {
      return <div>loading</div>
    }

    let shapesObj = _.find(shapes, function(prop) {
      return prop.name == 'shape';
    });

    let shapelist = shapesObj.mappedValueList;

    const shapesTpl = shapelist.map((shape, i) => {
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
              {shapesTpl}
            </div>
          </div>
        </div>
  	 	</div>
    );
	}

}

export default ShapeList;

