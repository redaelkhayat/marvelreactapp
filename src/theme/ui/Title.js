import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

import { utils } from "app/theme/styles";

const styles = {
  title: {
    marginTop: "1.25rem",
    composes: [utils.flex, utils.flexRows, utils.itemsCenter],
    "& h1": {
      margin: 0
    }
  },
  line: {
    margin: "0 1rem",
    borderTop: "1px solid",
    composes: utils.flex1
  }
};

const Title = ({ classes, text, children }) => {
  return (
    <div className={classes.title}>
      <h1 className={utils.lighter}>{text}</h1>
      <div className={classes.line} />
      <div>{children}</div>
    </div>
  );
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.any
};

export default injectSheet(styles)(Title);
