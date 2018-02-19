import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Hero from "./Hero";
import Loader from "./Loader";

const HeroList = ({ fetching, heros, changePage }) => {
  return (
    <div>
      <div className="btn-group btn-group-sm pull-right">
        <button className="btn btn-primary" onClick={() => changePage("prev")}>
          Previous
        </button>
        <button className="btn btn-primary" onClick={() => changePage("next")}>
          Next
        </button>
      </div>
      <p>&nbsp;</p>
      <div className="clear" />
      {fetching && <Loader />}
      <div className="row">
        <p>&nbsp;</p>
        {heros.map(hero => {
          return (
            <div key={hero.id} className="col-md-3 col-sm-4 col-xs-6">
              <Hero {...hero} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

HeroList.propTypes = {
  heros: PropTypes.arrayOf(PropTypes.object).isRequired,
  changePage: PropTypes.func
};

export default HeroList;
