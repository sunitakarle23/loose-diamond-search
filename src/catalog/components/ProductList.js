import React, { Component } from 'react';
import { Table, Button, Label, Image } from 'react-bootstrap';
import Helpers from '../../utils/helpers';

class ProductList extends Component {

	render() {
		const propHeader = (prop) => {
			let propName = prop;
			return(
		   <div className="th-flex">
			   <Image
			   	src="https://lds.optcentral.com/src/images/arrows.png"
			   	className="arrow-img both" />
			   <Image
			   	src="https://lds.optcentral.com/src/images/arrow-down.png"
			   	className="arrow-img down hide" />
			   <Image
			   	src="https://lds.optcentral.com/src/images/arrow-up.png"
			   	className="arrow-img up hide" />
			   <span> {propName}  </span>
		   </div>
			)
		}
		const tableHeader = (
			<thead>
				<tr>
    			<th className="sort"  data-prop="manufacturer">
    				{propHeader('Manufacturer')}
    			</th>
          <th className="sort" data-prop="shape">
          	{propHeader('shape')}
          </th>
    			<th className="sort sort-reverse" data-prop="carat">
    				{propHeader('Carat')}
    			</th>
          <th className="sort" data-prop="color">
          	{propHeader('Color')}
          </th>
    			<th className="sort" data-prop="clarity">
    				{propHeader('Clarity')}
    			</th>
          <th className="sort" data-prop="cut">
          	{propHeader('Cut')}
          </th>
          <th className="sort" data-prop="measurements">
          	{propHeader('Measurements')}
          </th>
    			<th className="sort" data-prop="price_carat">
    			  {propHeader('PPC')}
    			</th>
    			<th className="sort" data-prop="price">
    				{propHeader('$ Total')}
    			</th>
          <th className="text-center">
          	{propHeader('Actions')}
          </th>
				</tr>
			</thead>
		);
		const tableBody = this.props.products.map((val, key) => {
			let compName = val.compInfo.name;
			let properties = val.propertiesMap;
			let color = Helpers.getColorProperty(val.properties2.details);
			if(!properties){
				return;
			}

	    return (
	    	<tr key={key}>
					<td> {compName} </td>
	        <td className="LDS_SHAPE_COL">
	          <div className="hide-mobile">
	            <span className="shape-name">{ properties.lds_shape }</span>
	          </div>
	        </td>
	  			<td> { properties.lds_weight } </td>
	        <td>cc</td>
	        <td> { properties.lds_display_value_clarity } </td>
	        <td> { properties.lds_display_value_cut } </td>
	        <td><span>{ properties.lds_measurements }</span></td>
	        <td> { properties.lds_price_carat }</td>
	        <td>
	          <span> vbn</span>
	        </td>
	        <td>
	          <div className="plp-actions-column LDS_ACTIONS_COL">
							<Button className="btn-link"><strong>Inquire</strong></Button>
							<Button className="btn-link"><strong>Email</strong></Button>
							<Button className="btn-link"><strong>Print</strong></Button>
							<Button className="btn-link">
							  <strong>Basket</strong>
							</Button>
							<Label className="hide">
								<span >
								  <strong>Added to Basket</strong>
								</span>
							</Label>
	          </div>
	        </td>
	  		</tr>
  		)
		});


		return(
			<Table id="productsListTbl" className="detail-table" bordered condensed hover responsive>
				{tableHeader}
				<tbody>
					{tableBody}
				</tbody>
			</Table>
		)
	}

}

export default ProductList;
