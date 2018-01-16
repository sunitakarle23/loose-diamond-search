import React, { Component } from 'react';
import { Table, Button, Label, Image } from 'react-bootstrap';
import renderHTML from 'react-render-html';
import Helpers from '../../utils/helpers';
import LDS from '../../utils/global';

class ProductList extends Component {

	render() {
		const isAffiliated = ('AFFILIATED_ONLY' == LDS.session.catalogProductCompany) ? true : false;

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
    			<th className={ isAffiliated ? 'sort' :'hide'} data-prop="manufacturer">
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
			let price = Helpers.GET_PRODUCT_PRICE(val.retailPrice, val.wholesalePrice, true);

			if(!properties){
				return;
			}

	    return (
	    	<tr key={key}>
					<td className={ isAffiliated ? 'sort' :'hide'} > {compName} </td>
	        <td className="LDS_SHAPE_COL">
	          <div className="hide-mobile">
	            <span className="shape-name">{ properties.lds_shape }</span>
	          </div>
	        </td>
	  			<td> { Helpers.decimalFractionFormat(properties.lds_weight) } </td>
	        <td> { Helpers.getColorProperty(val.properties2.details) } </td>
	        <td> { properties.lds_display_value_clarity } </td>
	        <td> { properties.lds_display_value_cut } </td>
	        <td className={ properties.limited_data ? 'hide' : 'lds-limited-data-col'}>
	        	{ properties.lds_measurements }
	        </td>
	        <td className={ LDS.isPPCField ? 'lds-PPC-col' :'hide'} >
	        	{ Helpers.getFormattedCurrency(properties.lds_price_carat) }
	        </td>
	        <td className={ properties.limited_data ? 'hide' : 'lds-limited-data-col'}>
	          <span> { renderHTML(price) } </span>
	        </td>
	        <td className={ properties.limited_data ? 'hide' : 'lds-limited-data-col'}>
	          <div className="plp-actions-column lds-action-col">
							<Button className="btn-link inquire-btn">
								Inquire
							</Button>
							<Button className={ Helpers.hasEmailRole ? 'btn-link email-btn' : 'hide'}>
								Email
							</Button>
							<Button className={ Helpers.hasPrintRole ? 'btn-link print-btn' : 'hide'}>
								Print
							</Button>
							<Button  className={ Helpers.hasBasketShown ? 'btn-link add-to-basket' : 'hide'} >
							  Basket
							</Button>
							<Label className="hide">
								<span>
								  Added to Basket
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
