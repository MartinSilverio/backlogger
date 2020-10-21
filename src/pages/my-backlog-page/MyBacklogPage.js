import React from 'react';
import { useSelector } from 'react-redux';
import { selectBacklogList } from '../../redux/backlog/backlogSelector';

function MyBacklogPage() {
  const gameList = useSelector(selectBacklogList);

  return (
    <div>
      <p>My backlog</p>
      <ul>
        {gameList &&
          gameList.map((gameId) => {
            return <li key={gameId}>{gameId}</li>;
          })}
      </ul>
    </div>
  );
}

export default MyBacklogPage;
