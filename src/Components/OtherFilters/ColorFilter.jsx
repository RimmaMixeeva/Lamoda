import '../OtherStyles/OtherStyles.css';
import React, { useState } from 'react';
import Color from './Color';
const ColorFilter = (props) => {
  const colorArray = createColorArray();
  const [tmpArray, setArray] = useState(colorArray);

  function createColorArray() {
    let arr = [];
    props.array.map((item, index) => (arr[index] = item.color));
    let massive = [];
    Array.from(new Set(arr)).map(
      (item, index) => (massive[index] = { color: item, done: false })
    );
    return massive;
  }
  const handleChangeOfColorArray = (color) => {
    setArray(
      tmpArray.map((item) =>
        item.color === color ? { color: item.color, done: !item.done } : item
      )
    );
    props.onFilterByColor(
      tmpArray
        .map((item) =>
          item.color === color ? { color: item.color, done: !item.done } : item
        )
        .filter((item) => item.done === true)
        .map((item) => item.color)
    );
  };

  return (
    <div className="colorFilter">
      <div id="nameOfColorFilter">По цвету</div>
      {colorArray.map((item, index) => (
        <Color
          color={item.color}
          index={index}
          checked={item.done}
          onChangeColorArr={handleChangeOfColorArray}
        ></Color>
      ))}
    </div>
  );
};

export default ColorFilter;
