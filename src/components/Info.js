import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import classnames from "classnames";

import Loader from "./Loader";
import Hero from "./Hero";

import { utils } from "app/theme/styles";

const styles = {
  thumb: ({ thumbnail: { path, extension } }) => {
    return {
      height: 0,
      paddingTop: `${537 * 1e2 / 633}%`,
      background: `#222 url('${path}.${extension}') center`,
      backgroundSize: "cover",
      borderRadius: 5,
      border: "2px solid #0e0e13"
    };
  }
};

const Info = ({
  classes,
  fetching,
  id,
  name,
  description,
  thumbnail,
  comics,
  series
}) => {
  return (
    <div className={utils.cols}>
      <div className={classnames(utils.col, utils.oneThird)}>
        <div className={classes.thumb} />
      </div>
      <div className={classnames(utils.col, utils.twoThird)}>
        {description ? description : <i>No description</i>}
      </div>
      <div className={utils.clear} />
    </div>
  );
};

Info.propTypes = {
  fetching: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  thumbnail: PropTypes.shape({
    path: PropTypes.string.isRequired,
    extension: PropTypes.string.isRequired
  }),
  comics: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        resourceURI: PropTypes.string
      })
    )
  }),
  series: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        resourceURI: PropTypes.string
      })
    )
  })
};

export default injectSheet(styles)(Info);
