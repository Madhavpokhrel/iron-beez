import { combineReducers } from '@reduxjs/toolkit';
import { ProductsReducer } from './productsReducer/ProductsReducer';
import { checkTabReducer } from './TabReducer/TabReducer';
import { signinReducer } from './UserReducer/signinReducer';
import { registerReducer } from './UserReducer/registerReducer';
const allReducers = combineReducers({
  products: ProductsReducer,
  tab: checkTabReducer,
  userSignin: signinReducer,
  userRegister: registerReducer,
});

export default allReducers;
