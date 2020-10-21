import {
  CREATE_PRODUCT_SUCCESS, DELETE_PRODUCT_SUCCESS,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCTS_SUCCESS
} from "../actionTypes";
import axios from "../../axios-api";

const fetchProductsSuccess = products => {
  return {type: FETCH_PRODUCTS_SUCCESS, products};
};

export const fetchProducts = (category) => {
  return (dispatch) => {
    if (category){
      axios
          .get(`/products?category=${category}`)
          .then((response) => {
            dispatch(fetchProductsSuccess(response.data));
          })
    }
      else{
      axios.get("/products").then(response => {
        dispatch(fetchProductsSuccess(response.data));
      });
    }
  };
};

const createProductSuccess = () => {
  return {type: CREATE_PRODUCT_SUCCESS};
};

export const createProduct = product => {
  return dispatch => {
    return axios.post("/products", product).then(() => {
      dispatch(createProductSuccess());
    });
  };
};

const fetchProductSuccess = product => {
  return {type: FETCH_PRODUCT_SUCCESS, product};
};
export const fetchProduct = id => {
  return dispatch => {
    axios.get("/products/" + id).then(response => {
      console.log(response.data)
      dispatch(fetchProductSuccess(response.data));
    });
  };
};
const deleteProductSuccess = () => {
  return {type: DELETE_PRODUCT_SUCCESS};
};
export const deleteProduct = id => {
  return dispatch => {
    return axios.delete("/products/" + id).then(() => {
      dispatch(deleteProductSuccess());
    });
  };
};

const fetchCategoriesSuccess = categories => {
  return {type: FETCH_CATEGORIES_SUCCESS, categories};
};
export const fetchCategories = () => {
  return dispatch => {
    axios.get("/categories").then(response => {
      dispatch(fetchCategoriesSuccess(response.data));
    });
  };
};