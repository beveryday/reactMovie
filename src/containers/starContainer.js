import React, { useState } from "react";
import PropTypes from "prop-types";
import Star from "../components/star";
export const starArray = [
  { label: "bad" },
  { label: "good" },
  { label: "ok" },
  { label: "great" },
  { label: "excellent" }
];

function StarContainer({ propName }) {
  const starContain = {
    display: "flex",
    textAlign: "center",
  }
  const centerStar = {
    display: "block",
    margin: "0 auto",
    textAlign: "center",
    minWidth: "14em",
    maxWidth: "16em"
  }
  const [rating, updateRating] = useState(0);

  const _handleChange = starId => {
    updateRating(starId)
  };
  
  // const passTest = rating.filter(function(pass) {
  //   return  pass.isSelected === true;
  // });


  return (
  <div className="centerStar" style={centerStar}>
    <div className="starContainer" style={starContain}>
      {rating.map((x, index) => (
        <Star
          label={x.label}
          starId={index}
          key={index}
          isSelected={index <= rating}
          handleChange={_handleChange}
        />
      ))}
    </div>
    </div>
  );
}

StarContainer.propTypes = {
  propName: PropTypes.string
};

StarContainer.defaultProps = {
  propName: ""
};

export default StarContainer;


//rfcp
//once selected.
//const isSelectedStarId = starId that isSelected = true;
//const highlightedGroup = any starId <= isSelectedStarId asdalsdlkmlsd;


