const initialState = {
  products: [],
  error: null,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PRODUCTS_CONFIRMED_ACTION':
      return { ...state, products: action.products, error: null };
    case 'PRODUCTS_FAILED_ACTION':
      return { ...state, error: 'Search and ZipCode are required fields' };
    default:
      return state;
  }
};
