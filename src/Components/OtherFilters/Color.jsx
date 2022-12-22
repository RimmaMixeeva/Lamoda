import '../OtherStyles/OtherStyles.css';
const Color = (props) => {
  const handleCheck = () => {
    props.onChangeColorArr(props.color);
  };
  return (
    <label id="color">
      <input
        className="checkboxFilter"
        type="checkbox"
        onChange={handleCheck}
      />
      {props.color}
    </label>
  );
};
export default Color;
