import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import classnames from "classnames";

import Header from "./Header";
import { globals, utils } from "./styles";

const styles = {
  ...globals,
  layout: {
    height: "100%",
    composes: [utils.flex, utils.flexRows]
  },
  container: {
    padding: "0 1rem"
  }
};

const Layout = ({ classes, children }) => {
  return (
    <div id="layout" className={classes.layout}>
      <Header />
      <div className={classnames(classes.container, utils.flex1)}>
        {children}
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};

export default injectSheet(styles)(Layout);
