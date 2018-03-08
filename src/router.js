import React, { Component } from "react";
import PropTypes from "prop-types";
import path from "path";

import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          {this.props.routes.map((route, index) => {
            const { path, container, ...rest } = route;
            const Container = require(`./containers/${container}`).default;
            return (
              <Route
                key={`route-${index}`}
                path={path}
                component={Container}
                {...rest}
              />
            );
          })}
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      container: PropTypes.string.isRequired,
      exact: PropTypes.bool
    })
  )
};

export default App;
