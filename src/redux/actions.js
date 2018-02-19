import { LOAD, SUCCESS, FAIL } from "./actionTypes";
import callApi from "../api/callApi";

const callApiWithDispatch = (uri, params = {}) => {
  return dispatch => {
    dispatch({ type: LOAD });
    callApi(uri, params)
      .then(({ data }) => {
        dispatch({ type: SUCCESS, data: data.data });
      })
      .catch(err => {
        dispatch({ type: FAIL });
      });
  };
};

export const getHeros = (offset = 0) => {
  return callApiWithDispatch("/v1/public/characters", {
    offset
  });
};

export const getHeroInfo = heroId => {
  return callApiWithDispatch(`/v1/public/characters/${heroId}`);
};
