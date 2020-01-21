import React from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import StarIcon from "@material-ui/icons/Star";
//import new hightlighted star for functionality


function Star({ isSelected, handleChange, label, starId }) {
  const colorChange = () => {
    if (isSelected === true){
      return "secondary"
    }
    return "primary"
  }
  return (
    <div className="stars">
      <IconButton color={colorChange()} onClick={() => handleChange(starId)}>
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
  label: "Hello"
};

export default Star;
