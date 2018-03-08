import React, { Component } from "react";
import PropTypes from "prop-types";
import { compose, lifecycle, withHandlers } from "recompose";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchHeros, spotlight, setSort, changeOrder } from "../redux/actions";
import getHeros from "../redux/selectors";

import { Title } from "app/theme/ui";
import List from "../components/List";
import Search from "../components/Search";
import Sort from "../components/Sort";

const Home = ({
  data,
  fetching,
  onSearch,
  onCriteriaChange,
  onOrderChange
}) => {
  return (
    <div>
      <Title text="List of Marvel's heros">
        <Sort
          onCriteriaChange={onCriteriaChange}
          onOrderChange={onOrderChange}
        />
      </Title>
      <Search onSearch={onSearch} />
      <List heros={data} fetching={fetching} />
    </div>
  );
};

const enhance = compose(
  connect(getHeros),
  withHandlers({
    fetchHeros: ({ dispatch }) => () => {
      dispatch(fetchHeros());
    },
    onSearch: ({ dispatch }) => value => {
      dispatch(spotlight(value));
    },
    onCriteriaChange: ({ dispatch }) => name => {
      dispatch(setSort(name));
    },
    onOrderChange: ({ dispatch }) => order => {
      dispatch(changeOrder(order));
    }
  }),
  lifecycle({
    componentDidMount() {
      this.props.fetchHeros();
    }
  })
);

Home.propTypes = {
  fetching: PropTypes.bool.isRequired,
  data: PropTypes.array
};

export default enhance(Home);
