import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import injectSheet from "react-jss";
import classnames from "classnames";
import { utils } from "app/theme/styles";

const styles = {
  button: {
    display: "inline-block",
    padding: "0.35rem 0.75rem",
    color: "#fff",
    textAlign: "center",
    border: "0.1rem solid #23CF5F",
    borderRadius: "1.1rem",
    cursor: "pointer",
    composes: [utils.small, utils.bold, utils.animated],
    "&:hover": {
      extend: "buttonActive"
    }
  },
  buttonActive: {
    color: "#0e0e13",
    background: "#23cf5f",
    "&:hover": {
      opacity: 0.8
    }
  }
};

const Button = ({
  classes,
  children,
  url,
  to,
  className,
  active,
  onClick,
  onMouseOver
}) => {
  return to ? (
    <Link
      to={to}
      className={classnames(classes.button, className, {
        [classes.buttonActive]: active
      })}
    >
      {children}
    </Link>
  ) : (
    <a
      href={url}
      className={classnames(classes.button, className, {
        [classes.buttonActive]: active
      })}
    >
      {children}
    </a>
  );
};

Button.defaultProps = {
  active: false,
  className: "",
  url: "#"
};

Button.propTypes = {
  url: PropTypes.string,
  to: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.any.isRequired
};

export default injectSheet(styles)(Button);
