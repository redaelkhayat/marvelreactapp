import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getHeros } from "../redux/actions";

import List from "../components/List";

class Home extends Component {
  componentDidMount() {
    const { getHeros } = this.props;
    getHeros();
  }
  changePage(type) {
    const { getHeros, offset, itemsPerPage, total } = this.props;
    const newOffset = Math.max(
      0,
      Math.min(
        offset + (type == "next" ? itemsPerPage : -itemsPerPage),
        total - itemsPerPage
      )
    );
    if (offset == newOffset) return false;
    getHeros(newOffset);
  }
  render() {
    const { fetching, data, total, offset } = this.props;
    return (
      <div>
        <h1>Liste des super héros</h1>
        <List
          heros={data}
          fetching={fetching}
          total={total}
          offset={offset}
          changePage={this.changePage.bind(this)}
        />
      </div>
    );
  }
}

Home.defaultProps = {
  itemsPerPage: 20
};

Home.propTypes = {
  itemsPerPage: PropTypes.number,
  fetching: PropTypes.bool.isRequired,
  data: PropTypes.array,
  offset: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    ...state.heros,
    ...ownProps
  };
};

const mapDispatchToProps = {
  getHeros
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
