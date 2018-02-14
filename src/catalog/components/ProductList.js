import React, { Component } from 'react';
import { Table, Button, Label, Image} from 'react-bootstrap';
import renderHTML from 'react-render-html';
import Helpers from '../../utils/helpers';
import * as Globals from '../../utils/global';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
class ProductList extends Component {

	constructor(props) {
		super(props);
	}
	componentDidMount() {

	}

	getPropHeader(prop) {
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

	getTableHeader() {


		const tableHeader = (
			<thead>
				<tr>
    			<th ref="manufacturer"
    				className={ IS_AFFILIATED ? 'sort' :'hide'}
    				data-prop="manufacturer">
    				{this.getPropHeader('Manufacturer')}
    			</th>
          <th ref="shape" className="sort" data-prop="shape">
          	{this.getPropHeader('shape')}
          </th>
    			<th ref="carat" className="sort sort-reverse" data-prop="carat">
    				{this.getPropHeader('Carat')}
    			</th>
          <th ref="color" className="sort" data-prop="color">
          	{this.getPropHeader('Color')}
          </th>
    			<th ref="clarity" className="sort" data-prop="clarity">
    				{this.getPropHeader('Clarity')}
    			</th>
          <th ref="cut" className="sort" data-prop="cut">
          	{this.getPropHeader('Cut')}
          </th>
          <th ref="measurements" className="sort" data-prop="measurements">
          	{this.getPropHeader('Measurements')}
          </th>
    			<th ref="price_carat" className="sort" data-prop="price_carat">
    			  {this.getPropHeader('PPC')}
    			</th>
    			<th ref="price" className="sort" data-prop="price">
    				{this.getPropHeader('$ Total')}
    			</th>
          <th ref="actions" className="text-center">
          	{this.getPropHeader('Actions')}
          </th>
				</tr>
			</thead>
		);
		return tableHeader;
	}

	getTableBody() {
		if(! this.props.products) return;

		const tableBody = this.props.products.map((product, key) => {
			let compName = product.compInfo.name;
			let properties = product.propertiesMap;
			let price = Helpers.GET_PRODUCT_PRICE(product.retailPrice, product.wholesalePrice, true);

			if(!properties){
				return;
			}

			let productClasses = classNames({
				'product-link': true
			});

			let productLink = `/product/${product.id}`;
			let isLimited = properties.limited_data

	    return (

	    	<tr key={product.id}>

					<td className={ IS_AFFILIATED ? 'sort' :'hide'} >
						<Link to={productLink} className={productClasses}>
							{compName}
						</Link>
					</td>
			    <td className="LDS_SHAPE_COL">
			    	<Link to={productLink} className={productClasses}>
	          <div className="hide-mobile">
	            <span className="shape-name">{ properties.lds_shape }</span>
	          </div>
						</Link>
	        </td>
	  			<td>
			    	<Link to={productLink} className={productClasses}>
			    		{ Helpers.decimalFractionFormat(properties.lds_weight) }
			    	</Link>
			     </td>
	        <td>
	        	<Link to={productLink} className={productClasses}>
	        		{ Helpers.getColorProperty(product.properties2.details) }
	        	</Link>
	        </td>
	        <td>
	        	<Link to={productLink} className={productClasses}>
	        		{ properties.lds_display_value_clarity }
	        	</Link>
	        </td>
	        <td>
	        	<Link to={productLink} className={productClasses}>
	        		{ properties.lds_display_value_cut }
	        	</Link>
	        </td>
	        <td className={ isLimited ? 'hide' : 'lds-limited-data-col'}>
	        	<Link to={productLink} className={productClasses}>
	        		{ properties.lds_measurements }
	        	</Link>
	        </td>
	        <td className={IS_PPC ? 'lds-PPC-col' :'hide'} >
	        	<Link to={productLink} className={productClasses}>
	        		{ Helpers.getFormattedCurrency(properties.lds_price_carat) }
	        	</Link>
	        </td>
	        <td className={ isLimited ? 'hide' : 'lds-limited-data-col'}>
	         	<Link to={productLink} className={productClasses}>
	         		<span> { renderHTML(price) } </span>
	         	</Link>
	        </td>
	        <td className={ isLimited ? 'hide' : 'lds-limited-data-col'}>
	          <div className="plp-actions-column lds-action-col">
							<Button className="btn-link inquire-btn">
								Inquire
							</Button>
							<Button
								className={ Helpers.hasEmailRole ? 'btn-link email-btn' : 'hide'}
								> Email </Button>
							<Button
								className={ Helpers.hasPrintRole ? 'btn-link print-btn' : 'hide'}>
								Print
							</Button>
							<Button
								className={ Helpers.hasBasketShown ? 'btn-link add-to-basket' :'hide'} >
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

		return tableBody;
	}

	render() {
		let tBody = this.getTableBody();
		let tHead = this.getTableHeader();
		return(
			<Table id="productsListTbl" className="detail-table" bordered condensed hover responsive>
				{tHead}
				<tbody>
					{tBody}
				</tbody>
			</Table>
		)
	}

}

export default ProductList;
