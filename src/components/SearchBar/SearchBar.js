import React, { useState } from 'react';
import './SearchBar.scss';

function SearchBar(props) {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="search-bar-container">
      <input
        className="search-bar-container__search-bar"
        placeholder="Search"
        onChange={handleSearch}
      ></input>
    </div>
  );
}

export default SearchBar;
