import './OtherStyles/OtherStyles.css';
const SearchString = (props) => {
  const handleChange = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <input
      type="text"
      id="searchInput"
      placeholder="Поиск"
      onChange={handleChange}
    />
  );
};
export default SearchString;
