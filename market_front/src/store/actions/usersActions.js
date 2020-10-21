import axios from "../../axios-api";
import {push} from "connected-react-router";
import {LOGOUT_USER, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS, REGISTER_USER_FAILURE, REGISTER_USER_SUCCESS} from "../actionTypes";

const registerUserSuccess = () => {
  return {type: REGISTER_USER_SUCCESS};
};
const registerUserFailure = error => {
  return {type: REGISTER_USER_FAILURE, error};
};

export const registerUser = userData => {
  return dispatch => {
    return axios.post("/users", userData).then(() => {
      dispatch(registerUserSuccess());
      dispatch(push("/"));
    }, error => {
      if (error.response && error.response.data) {
        dispatch(registerUserFailure(error.response.data));
      } else {
        dispatch(registerUserFailure({global: "No internet"}));
      }
    });
  };
};

const loginUserSuccess = user => {
  return {type: LOGIN_USER_SUCCESS, user};
};
const loginUserFailure = error => {
  return {type: LOGIN_USER_FAILURE, error};
};
export const loginUser = userData => {
  return dispatch => {
    axios.post("/users/sessions", userData).then(response => {
      dispatch(loginUserSuccess(response.data));
      dispatch(push("/"));
    }, error => {
      dispatch(loginUserFailure(error.response.data));
    });
  };
};

export const logoutUser = () => {
  return dispatch => {
    axios.delete("/users/sessions").then(() => {
      dispatch({type: LOGOUT_USER});
      dispatch(push("/"));
    });
  };
};