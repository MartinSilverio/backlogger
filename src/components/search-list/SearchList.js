import React from 'react';
import useSWR from 'swr';
import SearchItem from '../search-item/SearchItem';
import './SearchList.scss';

function SearchList({ searchTerm }) {
  const urlRoot = `https://api.rawg.io/api/games?search=`;
  const { data: { results: gameList } = {}, isValidating } = useSWR(
    searchTerm ? urlRoot + searchTerm : null
  );

  return (
    <div className='search-list-container'>
      {isValidating ? (
        <span>Loading...</span>
      ) : (
        <ul className='search-list'>
          {gameList &&
            gameList.map((game) => {
              return <SearchItem key={game.id} game={game} />;
            })}
        </ul>
      )}
    </div>
  );
}

export default SearchList;
