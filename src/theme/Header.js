import React from "react";
import injectSheet from "react-jss";
import classnames from "classnames";

import { utils } from "app/theme/styles";

const styles = {
  header: {
    padding: "0.5rem",
    width: "100px",
    background: "#0e0e13",
    color: "#fff",
    composes: [utils.flex, utils.flexColumns, utils.justifySpaceBetween]
  },
  logo: {
    padding: "0.15rem 0.2rem 0.1rem",
    textAlign: "center",
    color: "#11121a",
    fontSize: "1.15rem",
    background: "#fff",
    composes: utils.uppercase,
    "&:hover": {
      opacity: 0.8
    }
  }
};

const Header = ({ classes }) => {
  return (
    <div className={classes.header}>
      <a className={classes.logo}>
        <strong>Marvel</strong>
      </a>
    </div>
  );
};

export default injectSheet(styles)(Header);
