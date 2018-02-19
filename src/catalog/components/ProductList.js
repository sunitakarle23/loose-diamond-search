import React, { Component } from 'react';
import { Table, Button, Label, Image} from 'react-bootstrap';
import renderHTML from 'react-render-html';
import Helpers from '../../utils/helpers';
import * as Globals from '../../utils/global';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { connect } from 'react-redux'
class ProductList extends Component {

	constructor(props) {
		super(props);
	}
	componentDidMount() {

	}

	getFilterSortType(prop) {
		// let r = _.where(opt.lds.sortingMap, {
		// 	property: prop
		// });
		var sortType = 'typevalue_';
		// if (!_.isEmpty(r)) {
		// 	sortType = r[0].fieldType == 1 ? 'propvalue_' : 'typevalue_';
		// }
		console.log('sortType', sortType);
		return sortType;
	}

	getSortProperty(property) {
		let propertyId;
		let filteredArr;

		if (property != 'price' && property != 'manufacturer') {
			filteredArr = _.where(this.props.proptypes, {
				name: property
			});

			if (_.isEmpty(filteredArr)) {
				return;
			}
			propertyId = filteredArr[0].id;
		} else if (property == 'manufacturer') {
			property = 'brand';
		}

		let sortType = this.getFilterSortType(property);
		let s =  property; //propertyId ? sortType + propertyId :
		return s;
	}

	handleSortBy(e) {
		let $target = e.currentTarget
		let sortProp = _.lowerCase($target.getAttribute('data-prop'));
		let classlist = $target.classList;

		if(classlist.length == 1) {
			classlist.add('up-sort');
		}

		let newSortStatus = ''
	  if(classlist.contains('up-sort')) {
			classlist.remove('up-sort');
			classlist.add('down-sort');
			newSortStatus = 'desc';
		} else if (classlist.contains('down-sort')){
			classlist.remove('down-sort');
			classlist.add('up-sort');
			newSortStatus = 'asc';
		}

		var sortBy = this.getSortProperty(sortProp) + ';' + newSortStatus;

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
		let p = ['Manufacturer', 'Shape', 'Carat', 'Color', 'Clarity', 'Cut','Measurements', 'PPC', 'price']

		let headerClasses = classNames({
			'sort': true,
			'hide': ! Globals.IS_AFFILIATED
		})
		const propHeaders = p.map((prop, i) => {
			if(prop == 'price'){
				return(
					<th key={i}
						data-prop={prop}
						ref={prop}
						className={headerClasses}
						onClick={e => this.handleSortBy(e)}>
						{this.getPropHeader('$ Total')}
					</th>
				)
			}
			return(
				<th key={i}
					ref={prop}
					data-prop={prop}
					className={headerClasses}
					onClick={e => this.handleSortBy(e)}>
					{this.getPropHeader(prop)}
				</th>
			)
		});

		return (
			<thead>
			<tr>
				{propHeaders}
        <th ref="actions" className="text-center">
        	{this.getPropHeader('Actions')}
        </th>
			</tr>
		</thead>
		)
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

					<td className={ Globals.IS_AFFILIATED ? 'sort' :'hide'} >
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
	        <td className={Globals.IS_PPC ? 'lds-PPC-col' :'hide'} >
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
								className={ Globals.IS_EMAIL ? 'btn-link email-btn' : 'hide'}
								> Email </Button>
							<Button
								className={ Globals.IS_PRINT ? 'btn-link print-btn' : 'hide'}>
								Print
							</Button>
							<Button
								className={ Globals.IS_BASKET ? 'btn-link add-to-basket' :'hide'} >
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
const mapStateToProps = (state) => {
  return {
    ldsProps: state.catalogReducer.applyLdsPropsReducer
  }
}
const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);