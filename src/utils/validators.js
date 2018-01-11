import React from 'react';
import Validation from 'react-validation';
import validator from 'validator';
//import _ from 'lodash'

Object.assign(Validation.rules, {
  required: {
    // Function to validate value
    // NOTE: value might be a number -> force to string
    rule: value => {
    	if (!value) {
    		return false
    	}
      return value.toString().trim();
    },
    // Function to return hint
    // You may use current value to inject it in some way to the hint
    hint: value => {
      return <span className='form-error is-visible'>Required</span>
    }
  },
  email: {
    // Example usage with external 'validator'
    rule: value => {
    	if (!value) {
    		return false
    	}
      return validator.isEmail(value);
    },
    hint: value => {
      return <span className='form-error is-visible'>{value} isnt an Email.</span>
    }
  },

});