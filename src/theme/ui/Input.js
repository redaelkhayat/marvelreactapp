import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import classnames from "classnames";

import { utils } from "app/theme/styles";

const styles = {
  field: {
    margin: "0.5rem 0 1rem",
    width: 200,
    composes: [utils.flex, utils.itemsCenter]
  },
  label: {
    fontWeight: 500,
    paddingRight: "1rem"
  },
  input: {
    marginBottom: -1,
    padding: "0.5rem 0",
    background: "none",
    color: "#fff",
    border: "0 none",
    borderBottom: "1px solid #fff",
    composes: [utils.flex1, utils.animated],
    "&:focus": {
      borderColor: "#23cf5f"
    }
  }
};

const Input = ({ classes, name, label, placeholder, onChange, className }) => {
  return (
    <p className={classnames(classes.field, className)}>
      <label className={classes.label}>{label}</label>
      <input
        className={classes.input}
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </p>
  );
};

Input.defaultProps = {
  className: ""
};

Input.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func
};

export default injectSheet(styles)(Input);
