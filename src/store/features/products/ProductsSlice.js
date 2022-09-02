// import { fetchProductsListingApi } from '../../util';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const MARKETPLACE_API_KEY = process.env.REACT_APP_MARKETPLACE_API_KEY;

const fetchProductList = createAsyncThunk(
  'products/fetchProductList',
  async arg => {
    const { zipCodeValue, searchValue } = arg;
    return await axios
      .get(
        `http://marketcheck-prod.apigee.net/v2/search/heavy-equipment/active?api_key=${MARKETPLACE_API_KEY}&search_text=${searchValue}&zip=${zipCodeValue}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then(res => res.data.listings);
  }
);

const initialState = {
  loading: false,
  products: [],
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchProductList.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchProductList.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchProductList.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message;
    });
  },
});

export { fetchProductList };
export default productsSlice.reducer;
