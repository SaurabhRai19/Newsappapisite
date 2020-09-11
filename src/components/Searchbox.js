import React from 'react';
import './Searchbox.css';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div>
      <div className="bg-secondary shadow-sm">
        <input type="search" 
        placeholder="SEARCH TODAY'S HEADLINES"  
        aria-describedby="button-addon1" 
        className="form-control border-0 bg-secondary"
        id="searchbutton"
        onChange={searchChange} />
      </div>
    </div>
  );
}

export default SearchBox;