import React from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import StarIcon from "@material-ui/icons/Star";
import { flexbox } from "@material-ui/system";


function Star({ isSelected, handleChange, label, starId }) {
  return (
    <div className="stars">
      <IconButton onClick={() => handleChange(starId)}>
        <StarIcon />
      </IconButton>
      <div>{label}</div>
    </div>
  );
}

Star.propTypes = {
  isSelected: PropTypes.bool,
  handleChange: PropTypes.func,
  label: PropTypes.string
};

Star.defaultProps = {
  isSelected: false,
  handleChange: () => {},
  label: "Poop"
};

export default Star;
