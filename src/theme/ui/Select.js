import React, { Component } from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import classnames from "classnames";
import { compose, withState, withHandlers, renderComponent } from "recompose";
import * as R from "ramda";

import { Button } from "./";
import { utils } from "app/theme/styles";

const arrowWidth = 0.25;
const styles = {
  select: {
    position: "relative",
    display: "inline-block",
    composes: utils.uppercase
  },
  arrow: {
    display: "inline-block",
    width: 0,
    height: 0,
    marginLeft: 6,
    border: `${arrowWidth}rem solid transparent`,
    borderTopColor: "initial",
    verticalAlign: `-${arrowWidth / 2}rem`
  },
  options: {
    position: "absolute",
    top: "100%",
    paddingTop: 3,
    minWidth: "100%",
    height: 0,
    opacity: 0,
    overflow: "hidden",
    whiteSpace: "nowrap",
    transform: "translateY(5px)",
    zIndex: 9,
    composes: [utils.small, utils.bold, utils.animated],
    "& ul": {
      padding: "0.5rem 0",
      background: "#0e0e13",
      color: "#fff",
      borderRadius: 5,
      "& li": {
        width: "100%",
        padding: "0.25rem 0.875rem",
        cursor: "pointer",
        "&:hover": {
          extend: "activeOption"
        }
      }
    }
  },
  activeOptions: {
    height: "auto",
    transform: "translateY(0)",
    opacity: 1
  },
  activeOption: {
    color: "#23cf5f"
  }
};

const Select = ({
  classes,
  choice,
  hover,
  choices,
  className,
  onChoiceClick,
  toggleHover
}) => {
  return (
    <div
      className={classes.select}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <Button active className={classnames(className)}>
        {choices[choice].label}
        <span className={classes.arrow} />
      </Button>
      <div
        className={classnames(classes.options, {
          [classes.activeOptions]: hover
        })}
      >
        <ul>
          {choices.map((_choice, index) => {
            return (
              <li
                className={classnames({
                  [classes.activeOption]: index == choice
                })}
                onClick={onChoiceClick.bind(this, index)}
                key={`choice-${index}`}
              >
                {_choice.label}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

var enhance = compose(
  withState("choice", "setChoice", 0),
  withState("hover", "setHover", false),
  withHandlers({
    onChoiceClick: ({ choices, setChoice, onChange }) => (index, e) => {
      setChoice(index);
      R.call(onChange, choices[index].key);
    },
    toggleHover: ({ setHover, hover }) => () => {
      setHover(!hover);
    }
  }),
  renderComponent(injectSheet(styles)(Select))
);

Select.defaultProps = {
  className: ""
};

Select.propTypes = {
  className: PropTypes.string,
  choices: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string
    })
  ),
  onChange: PropTypes.func
};

export default enhance(Select);
