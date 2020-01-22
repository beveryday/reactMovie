import React from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import StarIcon from "@material-ui/icons/Star";
// //import new hightlighted star for functionality
// import { starArray } from '../containers/starContainer'
const starArray = [
  { label: "bad", id: 1, isSelected: false},
  { label: "good", id: 2, isSelected: false },
  { label: "ok", id: 3, isSelected: false },
  { label: "great", id: 4, isSelected: false },
  { label: "excellent", id: 5, isSelected: false }
];

function Star({ isSelected, handleChange, label, starId}) {
  const colorChange = () => {
    for(var i = 0; i < starArray.length; i++){
        if(starArray[i].isSelected === true){
            var selectedStar = starArray[i].id;
            return "secondary";
        }
    }
    for(var x = 0; x < selectedStar; x++) {
        starArray[x].isSelected = true;
        return "secondary";
    }
    return starArray;
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
