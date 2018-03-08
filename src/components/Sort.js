import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { getSpotlightHeros } from "../redux/selectors";
import { Select } from "app/theme/ui";

const Sort = ({ onCriteriaChange, onOrderChange }) => {
  return (
    <div>
      <Select
        choices={[
          { key: "name", label: "Superhero name" },
          { key: "stories", label: "Stories" }
        ]}
        onChange={onCriteriaChange}
      />
      {" "}
      <Select
        choices={[
          { key: "asc", label: "Ascendant" },
          { key: "desc", label: "Descendant" }
        ]}
        onChange={onOrderChange}
      />
    </div>
  );
};

Sort.propTypes = {
  onCriteriaChange: PropTypes.func.isRequired,
  onOrderChange: PropTypes.func.isRequired
};

export default Sort;
