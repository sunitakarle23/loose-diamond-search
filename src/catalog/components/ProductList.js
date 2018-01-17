import React, { Component } from 'react';
import { Table, Button, Label, Image} from 'react-bootstrap';
import renderHTML from 'react-render-html';
import Helpers from '../../utils/helpers';
import LDS from '../../utils/global';
import { SESSION } from '../../constants';
import { Link } from 'react-router-dom';

class ProductList extends Component {

	render() {
		const isAffiliated = ('AFFILIATED_ONLY' === SESSION.catalogProductCompany) ? true : false;

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

		const tableBody = this.props.products.map((product, key) => {
			let compName = product.compInfo.name;
			let properties = product.propertiesMap;
			let price = Helpers.GET_PRODUCT_PRICE(product.retailPrice, product.wholesalePrice, true);

			if(!properties){
				return;
			}

	    return (

	    	<tr key={product.id}>

					<td className={ isAffiliated ? 'sort' :'hide'} >
						<Link to={`/product/${product.id}`} className="product-link">
							{compName}
						</Link>
					</td>
			    <td className="LDS_SHAPE_COL">
			    	<Link to={`/product/${product.id}`} className="product-link">
	          <div className="hide-mobile">
	            <span className="shape-name">{ properties.lds_shape }</span>
	          </div>
						</Link>
	        </td>
	  			<td>
			    	<Link to={`/product/${product.id}`} className="product-link">
			    		{ Helpers.decimalFractionFormat(properties.lds_weight) }
			    	</Link>
			     </td>
	        <td>
	        	<Link to={`/product/${product.id}`} className="product-link">
	        		{ Helpers.getColorProperty(product.properties2.details) }
	        	</Link>
	        </td>
	        <td>
	        	<Link to={`/product/${product.id}`} className="product-link">
	        		{ properties.lds_display_value_clarity }
	        	</Link>
	        </td>
	        <td>
	        	<Link to={`/product/${product.id}`} className="product-link">
	        		{ properties.lds_display_value_cut }
	        	</Link>
	        </td>
	        <td className={ properties.limited_data ? 'hide' : 'lds-limited-data-col'}>
	        	<Link to={`/product/${product.id}`} className="product-link">
	        		{ properties.lds_measurements }
	        	</Link>
	        </td>
	        <td className={ LDS.isPPCField ? 'lds-PPC-col' :'hide'} >
	        	<Link to={`/product/${product.id}`} className="product-link">
	        		{ Helpers.getFormattedCurrency(properties.lds_price_carat) }
	        	</Link>
	        </td>
	        <td className={ properties.limited_data ? 'hide' : 'lds-limited-data-col'}>
	         	<Link to={`/product/${product.id}`} className="product-link">
	         		<span> { renderHTML(price) } </span>
	         	</Link>
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
