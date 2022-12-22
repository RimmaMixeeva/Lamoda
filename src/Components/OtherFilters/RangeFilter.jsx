import '../OtherStyles/OtherStyles.css';
import React, { useState } from 'react';
const RatingFilter = (props) => {
  const defualt = props.range;
  const [tmpArray, setArray] = useState(defualt);
  const handleMinValue = (e) => {
    if (!isNaN(e.target.value)) {
      if (e.target.value !== '') {
        setArray([e.target.value, tmpArray[1]]);
        props.onChange([e.target.value, tmpArray[1]]);
      } else {
        setArray(defualt);
        props.onChange(defualt);
      }
    }
  };
  const handleMaxValue = (e) => {
    if (!isNaN(e.target.value)) {
      if (e.target.value !== '') {
        setArray([tmpArray[0], e.target.value]);
        props.onChange([tmpArray[0], e.target.value]);
      } else {
        setArray(defualt);
        props.onChange(defualt);
      }
    }
  };

  return (
    <div className="raitingFilter">
      <div className="nameOfFilter">{props.filterName}</div>
      <div className="inputField">
        <input
          className="input"
          id="minValue"
          onChange={handleMinValue}
          type="text"
        ></input>
        <p> — </p>
        <input
          className="input"
          id="maxValue"
          onChange={handleMaxValue}
          type="text"
        ></input>
      </div>
    </div>
  );
};
export default RatingFilter;
