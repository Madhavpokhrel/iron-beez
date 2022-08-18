import { combineReducers } from '@reduxjs/toolkit';
import { productReducer } from './ProductsReducer';
const allReducers = combineReducers({
  products: productReducer,
});

export default allReducers;
