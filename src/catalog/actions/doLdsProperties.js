
import {
  SAVE_LDS_PROPERTIES
} from './actionTypes';


export function doLdsProperties(payload) {
  return {
    type: SAVE_LDS_PROPERTIES,
    payload
  };
}