import {DELETE_PRODUCT_SUCCESS, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCTS_SUCCESS} from "../actionTypes";

const initialState = {
  products: [],
  product: {}
};

const productsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {...state, products: action.products};
    case FETCH_PRODUCT_SUCCESS:
      return {...state, product: action.product};
    case DELETE_PRODUCT_SUCCESS:
      return {...state};
    default:
      return state;
  }
};

export default productsReducer;