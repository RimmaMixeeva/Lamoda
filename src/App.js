import './styles.css';
import './Components/SearchString';
import SearchString from './Components/SearchString';
import MainFilters from './Components/MainFilters';
import ColorFilter from './Components/OtherFilters/ColorFilter';
import RangeFilter from './Components/OtherFilters/RangeFilter';
import React, { useState } from 'react';
import Things from './Components/Things';
import generateItems from './Components/GenerateItems/generateItems';
const itemArray = generateItems(500);
console.log(itemArray);
const App = () => {
  const [tmpArray, setArray] = useState(itemArray);
  const [tmpSorting, setTmpSorting] = useState();

  const handleSort = (sortName) => {
    setArray([...tmpArray].sort(SORTINGS[sortName]));
    setTmpSorting(sortName);
  };
  const SORTINGS = {
    'Сначала дешёвые': (a, b) => a.price - b.price,
    'Сначала дорогие': (a, b) => b.price - a.price,
    'По популярности': (a, b) => a.rating - b.raiting,
  };
  const handleColorFilter = (arr) => {
    if (arr.length !== 0) {
      setArray(itemArray.filter((item) => arr.includes(item.color)));
    } else setArray(itemArray);
  };
  const handleSearchFilter = (value) => {
    setArray(
      itemArray.filter((item) => item.name.includes(value.toLowerCase()))
    );
  };
  const handleRaitingFilter = (arr) => {
    setArray(
      [...itemArray].filter(
        (item) => item.rating >= arr[0] && item.rating <= arr[1]
      )
    );
  };
  const handlePriceFilter = (arr) => {
    setArray(
      [...itemArray].filter(
        (item) => item.price >= arr[0] && item.price <= arr[1]
      )
    );
  };
  return (
    <div className="App">
      <SearchString onChange={handleSearchFilter} />
      <MainFilters onFilter={handleSort} sortName="Сначала дорогие" />
      <MainFilters onFilter={handleSort} sortName="Сначала дешёвые" />
      <div className="mainPart">
        <div className="otherFilters">
          <ColorFilter array={itemArray} onFilterByColor={handleColorFilter} />
          <RangeFilter
            onChange={handlePriceFilter}
            filterName="фильтр по цене"
            range={[0, 9999]}
          />
          <RangeFilter
            onChange={handleRaitingFilter}
            filterName="фильтр по рейтингу"
            range={[0, 100]}
          />
          <div>ВСЕГО ТОВАРОВ {tmpArray.length}</div>
        </div>
        <Things array={tmpArray} />
      </div>
    </div>
  );
};
export default App;
