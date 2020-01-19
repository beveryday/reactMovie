import React, { useState } from "react";
import PropTypes from "prop-types";
import Star from "../components/star";
const starArray = [
  { label: "bad", id: 1, isSelected: false},
  { label: "good", id: 2, isSelected: false },
  { label: "ok", id: 3, isSelected: false },
  { label: "great", id: 4, isSelected: false },
  { label: "excellent", id: 5, isSelected: false }
];

function StarContainer({ propName }) {
  const starContain = {
    display: "flex",
    textAlign: "center",
  }
  const [rating, updateRating] = useState(starArray);

  const _handleChange = starId => {
    updateRating(prevRating => {
      for(var i = 0; i < starId; i++){
        starArray[i].isSelected = true;
        console.log(starArray[i]);
    }

      return prevRating.map(pr => {
        if (pr.id === starId) {
          return { ...pr, isSelected: !pr.isSelected};
        }
        return pr;
      });
    });
  };

  const passTest = rating.filter(function(pass) {
    return  pass.isSelected == true;
  });


  return (
    <div className="starContainer" style={starContain}>
      {rating.map(x => (
        <Star
          label={x.label}
          starId={x.id}
          key={x.id}
          isSelected={x.isSelected}
          handleChange={_handleChange}
        />
      ))}
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
//const highlightedGroup = any starId <= isSelectedStarId;


