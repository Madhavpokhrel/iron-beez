import { combineReducers } from '@reduxjs/toolkit';
import { productReducer } from './productsReducer/ProductsReducer';
import { checkTabReducer } from './TabReducer/TabReducer';
const allReducers = combineReducers({
  products: productReducer,
  tab: checkTabReducer,
});

export default allReducers;
