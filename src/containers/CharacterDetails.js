import React, { Component } from "react";
import PropTypes from "prop-types";
import * as R from "ramda";
import {
  compose,
  lifecycle,
  withProps,
  withHandlers,
  branch,
  renderComponent
} from "recompose";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getHeroInfo } from "../redux/actions";

import { Button, Title } from "app/theme/ui";
import Info from "../components/Info";
import Loader from "../components/Loader";

import { utils } from "app/theme/styles";

const CharacterDetails = ({ hero, fetching }) => {
  return (
    <div>
      <Title text={hero.name}>
        <Button to="/" className={utils.uppercase}>
          Back to home
        </Button>
      </Title>
      <Info {...hero} fetching={fetching} />
    </div>
  );
};

const enhance = compose(
  connect(state => state.heros),
  withProps(({ data }) => {
    return {
      isEmpty: R.isEmpty(data),
      hero: R.head(data)
    };
  }),
  withHandlers({
    getHeroInfo: ({ dispatch, match: { params: { characterId } } }) => () => {
      dispatch(getHeroInfo(characterId));
    }
  }),
  lifecycle({
    componentDidMount() {
      this.props.getHeroInfo();
    }
  }),
  branch(
    ({ fetching, isEmpty }) => isEmpty || fetching,
    renderComponent(Loader)
  )
);

CharacterDetails.propTypes = {
  fetching: PropTypes.bool.isRequired,
  data: PropTypes.array
};

export default enhance(CharacterDetails);
