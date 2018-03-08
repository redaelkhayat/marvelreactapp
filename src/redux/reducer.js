const R = require("ramda");
import {
  LOAD,
  SUCCESS,
  FAIL,
  SPOTLIGHT,
  CHANGE_CRITERIA,
  SORT_ORDER
} from "./actionTypes";
import { spotlight } from "./actions";

const initialState = {
  fetching: false,
  data: [],
  spotlight: null,
  sort: {
    order: "asc",
    criteria: "name"
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        fetching: true,
        data: []
      };
      break;

    case SUCCESS: {
      const data = action.data;
      return {
        ...state,
        fetching: false,
        data: data.results,
        total: data.total,
        offset: data.offset
      };
      break;
    }

    case FAIL:
      return {
        ...state,
        fetching: false
      };
      break;

    case SPOTLIGHT:
      return {
        ...state,
        spotlight: action.name
      };
      break;

    case SORT_ORDER:
      return {
        ...state,
        sort: {
          ...state.sort,
          order: action.order
        }
      };
      break;

    case CHANGE_CRITERIA:
      return {
        ...state,
        sort: {
          ...state.sort,
          criteria: action.name
        }
      };
      break;

    default:
      return state;
      break;
  }
};
