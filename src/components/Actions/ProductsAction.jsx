// import { fetchProductsListingApi } from '../../util';
import axios from 'axios';
const PRODUCTS_CONFIRMED_ACTION = 'PRODUCTS_CONFIRMED_ACTION';
const PRODUCTS_FAILED_ACTION = 'PRODUCTS_FAILED_ACTION';

export const loadProductsList =
  (zipCodeValue, searchValue) => async dispatch => {
    try {
      const result = await axios.get(
        `http://marketcheck-prod.apigee.net/v2/search/heavy-equipment/active?api_key=OMOV4Xoz9GXONrwlv6dvtvRuJeps33T3&search_text=${searchValue}&zip=${zipCodeValue}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const products = result.data.listings;
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
