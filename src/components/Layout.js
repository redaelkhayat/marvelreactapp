import React from "react";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div className="container">
      {children}
      <div className="row">
        <hr />
        <div className="col-lg-12">
          <p className="muted pull-right">© 2017 Reda El Khayat</p>
        </div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
