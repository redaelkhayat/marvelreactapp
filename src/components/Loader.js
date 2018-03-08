import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import classnames from "classnames";

const styles = {
  loader: {
    margin: "20px 0",
    textAlign: "center"
  },
  circle: {
    animation: "pulse 1s ease-in-out infinite",
    transformOrigin: "50% 50%",
    transform: "scale(1)"
  },
  middle: {
    animationDelay: "0.15s"
  },
  last: {
    animationDelay: "0.3s"
  },
  "@keyframes pulse": {
    "50%": {
      transform: "scale(0)"
    }
  }
};

const Loader = ({ classes, color, width, className }) => {
  return (
    <div className={classnames(classes.loader, className)}>
      <svg
        id="loader"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        viewBox="0 0 36 10"
      >
        <g fill={color}>
          <circle className={classnames(classes.circle)} r="5" cx="5" cy="5" />
          <circle
            className={classnames(classes.circle, classes.middle)}
            r="5"
            cx="18"
            cy="5"
          />
          <circle
            className={classnames(classes.circle, classes.last)}
            r="5"
            cx="31"
            cy="5"
          />
        </g>
      </svg>
    </div>
  );
};

Loader.defaultProps = {
  className: "",
  width: 30,
  color: "#23cf5f"
};

Loader.propTypes = {
  className: PropTypes.string,
  width: PropTypes.number,
  color: PropTypes.string
};

export default injectSheet(styles)(Loader);
