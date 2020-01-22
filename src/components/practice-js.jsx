const starArray = [
  { label: "bad", id: 1, isSelected: false},
  { label: "good", id: 2, isSelected: false },
  { label: "ok", id: 3, isSelected: false },
  { label: "great", id: 4, isSelected: false },
  { label: "excellent", id: 5, isSelected: true}
];

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
selectAll();



const colorChange = () => {
    if (isSelected === true){
      return "secondary"
    }
    return "primary"
}