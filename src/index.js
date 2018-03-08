// @author: Reda El Khayat (Harington)
import React from "react";
import { render } from "react-dom";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import reducer from "./redux/reducer";
const store = createStore(
  combineReducers({
    heros: reducer
  }),
  applyMiddleware(logger, thunk)
);

import Layout from "app/theme";
import App from "./router";
import { routes } from "./routes";

import "./public/index.html";

const target = document.getElementById("app");
render(
  <Provider store={store}>
    <Layout>
      <App routes={routes} />
    </Layout>
  </Provider>,
  target
);
