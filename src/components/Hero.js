import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import injectSheet from "react-jss";
import color from "color";
import classnames from "classnames";

import { utils } from "app/theme/styles";

const overlayColor = color("#0e0e13");
const styles = {
  radius: {
    borderRadius: 5
  },
  fit: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  hero: {
    position: "relative",
    marginBottom: "1rem",
    height: 0,
    paddingTop: `${537 * 1e2 / 633}%`,
    background: `#222 none center`,
    backgroundSize: "cover",
    color: "#fff"
  },
  heroThumbnail: ({ thumbnail: { path, extension } }) => {
    return {
      backgroundImage: `url('${path}.${extension}')`
    };
  },
  content: {
    background: overlayColor.alpha(0.7).string(),
    composes: [utils.flex, utils.itemsCenter, utils.animated],
    "&:hover": {
      background: overlayColor.alpha(0.9).string(),
      boxShadow: "inset 0 0 0 2px #16cc49"
    },
    "& h3": {
      margin: 0,
      fontSize: "1rem"
    }
  },
  wrapper: {
    padding: "1rem",
    textAlign: "center",
    composes: utils.flex1
  }
};

const Hero = ({ classes, id, name, urls, stories }) => {
  return (
    <Link to={`/${id}`}>
      <div
        className={classnames(
          classes.hero,
          classes.heroThumbnail,
          classes.radius
        )}
      >
        {name && (
          <Fragment>
            <div
              className={classnames(
                classes.content,
                classes.fit,
                classes.radius
              )}
            >
              <div className={classes.wrapper}>
                <h3 className={classnames(utils.uppercase, utils.bold)}>
                  {name}
                </h3>
              </div>
            </div>
          </Fragment>
        )}
      </div>
    </Link>
  );
};

Hero.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  thumbnail: PropTypes.shape({
    path: PropTypes.string.isRequired,
    extension: PropTypes.string.isRequired
  }),
  urls: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired
    })
  )
};

export default injectSheet(styles)(Hero);
