import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getHeroInfo } from "../redux/actions";

import Info from "../components/Info";

class CharacterDetails extends Component {
  componentDidMount() {
    const { getHeroInfo, match } = this.props;
    getHeroInfo(match.params.characterId);
  }
  render() {
    const { fetching, data } = this.props;
    if(! data.length)
      return null;
    const hero = data[0];
    return (
      <div>
        <h1>Fiche identité</h1>
        <Link to="/" className="btn btn-primary">
          Back to home
        </Link>
        <p>&nbsp;</p>
        <Info {...hero} fetching={fetching} />
      </div>
    );
  }
}

CharacterDetails.propTypes = {
  fetching: PropTypes.bool.isRequired,
  data: PropTypes.array
};

const mapStateToProps = state => {
  return state.heros;
};

const mapDispatchToProps = {
  getHeroInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetails);
