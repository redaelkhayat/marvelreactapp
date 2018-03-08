import React from "react";
import PropTypes from "prop-types";
import { withHandlers, renderComponent, compose } from "recompose";
import { Input } from "app/theme/ui";

const Search = ({ onChange }) => {
  return (
    <Input
      label="Spotlight"
      name="superhero"
      placeholder="e.g. Batman"
      onChange={onChange}
    />
  );
};

const enhance = compose(
  withHandlers({
    onChange: ({ onSearch }) => e => {
      onSearch(e.target.value);
    }
  }),
  renderComponent(Search)
);

Search.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default enhance(Search);
