import './OtherStyles/OtherStyles.css';
const MainFilters = (props) => {
  const handleFilter = () => {
    props.onFilter(props.sortName);
  };

  return (
    <button className="filter" onClick={handleFilter}>
      {props.sortName}
    </button>
  );
};

export default MainFilters;
