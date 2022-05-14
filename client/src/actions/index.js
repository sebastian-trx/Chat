import axios from "axios";

import{
  LOCAL_LOGIN,
  GET_INFO,
  LOGOUT,
} from "./const"

export function localLogin(payload) {
  return async function (dispatch) {
    await axios
      .post(`/login`, payload, { withCredentials: true })
      .then((response) => {
        dispatch({
          type: LOCAL_LOGIN,
          payload: response.data,
        });
      })
      .catch((error) => console.log(error));
  };
}

export function getUserInfo() {
  return async function (dispatch) {
    const arr = await axios.get(`/session`, {
      withCredentials: true,
    });
    return dispatch({
      type: GET_INFO,
      payload: arr.data,
    });
  };
}

export function logout() {
  return async function (dispatch) {
    await axios.get(`/login/logout`, {
      withCredentials: true,
    });
    return dispatch({
      type: LOGOUT,
    });
  };
}

