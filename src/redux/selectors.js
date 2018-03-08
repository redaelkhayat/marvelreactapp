import { createSelector, createStructuredSelector } from "reselect";
const R = require("ramda");

const getFetching = state => state.heros.fetching;
const getSort = state => state.heros.sort;
const getSpotlight = state => state.heros.spotlight;
const getHeros = state => state.heros.data;

export const getSpotlightHeros = createSelector(
  [getSpotlight, getHeros],
  (spotlight, heros) => {
    if (!spotlight) {
      return heros;
    }
    const regexp = new RegExp(spotlight, "gi");
    return R.filter(R.pipe(R.prop("name"), R.test(regexp)), heros);
  }
);

export const sortHeros = createSelector(
  [getSpotlightHeros, getSort],
  (heros, sort) => {
    const order = sort.order == "desc" ? R.descend : R.ascend;
    switch (sort.criteria) {
      case "name":
        return R.sort(order(R.prop("name")))(heros);
        break;
      case "stories":
        return R.sort(order(R.path(["stories", "available"])))(heros);
        break;
      default:
        return heros;
    }
  }
);

export default createStructuredSelector({
  fetching: getFetching,
  data: sortHeros
});
