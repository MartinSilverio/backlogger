import React, { useState, useEffect } from 'react';
import SearchInput from '../../components/search-input/SearchInput';
import SearchList from '../../components/search-list/SearchList';

import './SearchPage.scss';

function SearchPage() {
  // const [gameList, setGameList] = useState([]);
  const [query, setQuery] = useState('');
  const [searchTerm, setSearchTerm] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   console.log(searchTerm);
  //   if (searchTerm) {
  //     const searchGames = async () => {
  //       setIsLoading(true);
  //       const resp = await fetch(
  //         `https://api.rawg.io/api/games?search=${encodeURI(searchTerm)}`
  //       );
  //       const json = await resp.json();
  //       setGameList(json.results);
  //       setIsLoading(false);
  //     };
  //     searchGames();
  //   }
  // }, [searchTerm]);

  return (
    <div id='search-page'>
      <SearchInput
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        onClick={() => {
          setSearchTerm(query);
          setQuery('');
        }}
        value={query}
      />
      {/* {isLoading ? <div>Loading...</div> : <SearchList gameList={gameList} />} */}
      <SearchList searchTerm={searchTerm} />
    </div>
  );
}

export default SearchPage;
