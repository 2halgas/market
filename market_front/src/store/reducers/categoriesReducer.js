import {FETCH_CATEGORIES_SUCCESS} from "../actionTypes";

const initialState = {
  categories: []
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      return {...state, categories: action.categories};
    default:
      return state;
  }
};

export default categoriesReducer;