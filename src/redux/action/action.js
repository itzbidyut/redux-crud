import {
  GET_DETAILS,
  POST_DETAILS,
  UPDATE_DETAILS,
  DELETE_DETAILS,
} from "../type";
import {
  GetApiDetails,
  PostApiDetails,
  updateDetailsApiDetails,
  deleteDetailsApiDetails,
} from "../../apis/axiosRequest";

export const getDetailsAction = () => {
  return function (dispatch) {
    return GetApiDetails().then((res) => {
      dispatch({
        type: GET_DETAILS,
        payload: res.data,
      });
    });
  };
};

export const postDetailsAction = (req) => {
  return function (dispatch) {
    dispatch({
      type: POST_DETAILS,
      payload: false,
    });
    return PostApiDetails(req).then((res) => {
      console.log("respose data from action", res);
      dispatch({
        type: POST_DETAILS,
        payload: true,
      });
    });
  };
};

export const updateDetailsAction = (req, id) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_DETAILS,
      payload: false,
    });
    return updateDetailsApiDetails(req, id).then((res) => {
      dispatch({
        type: UPDATE_DETAILS,
        payload: true,
      });
    });
  };
};

export const deleteDetailsAction = (id) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_DETAILS,
      payload: false,
    });
    return deleteDetailsApiDetails(id).then((res) => {
      dispatch({
        type: DELETE_DETAILS,
        payload: true,
      });
    });
  };
};
