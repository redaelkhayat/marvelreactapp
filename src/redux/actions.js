import {
  LOAD,
  SUCCESS,
  FAIL,
  SPOTLIGHT,
  CHANGE_CRITERIA,
  SORT_ORDER
} from "./actionTypes";
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

export const fetchHeros = (offset = 0) => {
  return callApiWithDispatch("/v1/public/characters", {
    offset
  });
};

export const getHeroInfo = heroId => {
  return callApiWithDispatch(`/v1/public/characters/${heroId}`);
};

export const spotlight = name => {
  return {
    name,
    type: SPOTLIGHT
  };
};

export const setSort = name => {
  return {
    type: CHANGE_CRITERIA,
    name
  };
};

export const changeOrder = order => {
  return {
    type: SORT_ORDER,
    order
  };
};
