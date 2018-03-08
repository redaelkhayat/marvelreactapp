import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Link } from "react-router-dom";

import Hero from "./Hero";
import Loader from "./Loader";

import { utils } from "app/theme/styles";

const HeroList = ({ fetching, heros }) => {
  return (
    <div>
      {fetching && <Loader />}
      <div className={utils.cols}>
        {heros.map(hero => {
          return (
            <div
              key={hero.id}
              className={classnames(utils.col, utils.oneFifth)}
            >
              <Hero {...hero} />
            </div>
          );
        })}
        <div className={utils.clear} />
      </div>
    </div>
  );
};

HeroList.propTypes = {
  heros: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default HeroList;
