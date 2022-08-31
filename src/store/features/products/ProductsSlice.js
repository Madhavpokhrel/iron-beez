// import { fetchProductsListingApi } from '../../util';
import axios from 'axios';
const PRODUCTS_CONFIRMED_ACTION = 'PRODUCTS_CONFIRMED_ACTION';
const PRODUCTS_FAILED_ACTION = 'PRODUCTS_FAILED_ACTION';
const MARKETPLACE_API_KEY = process.env.REACT_APP_MARKETPLACE_API_KEY;

export const loadProductsList =
  (zipCodeValue, searchValue) => async dispatch => {
    try {
      const result = await axios.get(
        `http://marketcheck-prod.apigee.net/v2/search/heavy-equipment/active?api_key=${MARKETPLACE_API_KEY}&search_text=${searchValue}&zip=${zipCodeValue}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const products = result.data.listings;
      console.log("loadProductsList===>",products)
      dispatch({
        type: PRODUCTS_CONFIRMED_ACTION,
        products,
      });
    } catch (error) {
      const err = error.message;
      dispatch({
        type: PRODUCTS_FAILED_ACTION,
        payload: {
          error: err,
        },
      });
    }
  };

