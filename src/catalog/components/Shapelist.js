import React, { Component } from 'react';
import { mappedNameProps } from '../../constants';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class ShapeList extends Component {

  constructor (props) {
    super(props);

    this.getImageMapping = this.getImageMapping.bind(this);
  } 

  getImageMapping (mappedValueList) {
    /**
     * Loop through mapped props
     * Remove associated codes from api response
     * and add parent code[main code like remove BR and Add RD if not exist
     * But while adding this code preseve sort position
     */
    let outputV = []
    let associatedCodeAlreadyLooped;
    let shapeCode;

    _.each(mappedValueList, function(mappedValueList, key, list){
      shapeCode = mappedValueList.mapping.toUpperCase();
      associatedCodeAlreadyLooped = false;
      _.each(mappedNameProps['shape'], function(shapeObj, key, list){
        //Dont push if parent shape already pushed
        var isCodeAlreadyExist = _.filter(outputV, function(x) {
          return x.code == shapeObj.code;
        });
        if(!_.isEmpty(isCodeAlreadyExist)){
          return;
        }
        //if shape exist as code
        if(shapeObj.code == shapeCode){
          outputV.push(shapeObj);
        }else{

          //Check if its exist in associated list then push parent code in list
          if(( _.indexOf(shapeObj.associated, shapeCode)  > -1 ) && ( !associatedCodeAlreadyLooped )){
            //check if we already pushed the shape whose associated list contain shapeCode
            outputV.push(shapeObj);
            associatedCodeAlreadyLooped = true;
          }

        }

      });

    });
    //console.log('Log #1 @outputV T =>', outputV);

    /**
     * Transform each code into object so that we can pasre well in hbs file
     */
    _.each(outputV, function(shapeObj, sKey, list){
      //convert array to string
      shapeObj.associated = shapeObj.associated.join('|');

    });

    //console.log('Log #3 @outputV =>', outputV);

    mappedValueList = outputV;

    return mappedValueList;
  }

	render () {
    const shapes = this.props.shapes;

    if(!shapes) {
      return <div>loading</div>
    }

    let shapesObj = _.find(shapes, function(prop) {
      return prop.name == 'shape';
    });

    let shapelist = this.getImageMapping(shapesObj.mappedValueList);

    console.log('shapelist ===>', shapelist);

    const shapesTpl = shapelist.map((shape, i) => {
      console.log('shape ===>', shape);
      return (
        <div key={i} id={`shape-${shape.name}`} className="custom-column-6">
        <Link to="javascript:void(0)" className="shape-link" data-shape={shape.name} data-associated={shape.associated}>
            <img className="img-responsive" src={`https://cdn.optcentral.com/optportal/images/lds/shape_thumbnails/${shape.code}.png`} alt={shape.image}/>
        </Link>
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

