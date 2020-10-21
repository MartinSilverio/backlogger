import React from 'react';
import { useDispatch } from 'react-redux';
import { addGame } from '../../redux/backlog/backlogSlice';
import './SearchItem.scss';

function SearchItem({ game }) {
  const { id, name, background_image, playtime } = game;
  const dispatch = useDispatch();
  const addToBacklog = () => {
    dispatch(addGame({ id }));
  };

  return (
    <li className='game-item'>
      <div className='game-image-container'>
        <img alt='' src={background_image}></img>
      </div>
      <div className='game-details'>
        <h3 className='game-title'>{name}</h3>
        <p className='average-playtime'>Average Playtime: {playtime}</p>
        <button className='add-to-backlog' onClick={addToBacklog}>
          Add to backlog
        </button>
      </div>
    </li>
  );
}

export default SearchItem;
