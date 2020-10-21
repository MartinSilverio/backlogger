import React from 'react';

import './SearchInput.scss';

function SearchInput({ onClick, onChange, value }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onClick(e);
  };

  return (
    <div className='search-input-container'>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='Search for the game'
          type='text'
          className='search-input'
          value={value}
          onChange={onChange}
        />
        <button className='search-button'>
          <i className='fas fa-search'></i>
        </button>
      </form>
    </div>
  );
}

export default SearchInput;
