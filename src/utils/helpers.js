import React from 'react'

const Helpers = {

	removeByKey: function (Obj, deleteKey) {
		return Object.keys(Obj)
			.filter(key => key !== deleteKey)
			.reduce((result, current) => {
				result[current] = Obj[current];
				return result;
			}, {});
	}

}

export default Helpers;
