import React from 'react';
import HeartIcon from '../../assets/icons/heart.png';

const FavouritesButton = () => {
  return <button className='favourite-icon'>
	<img src={HeartIcon} alt="favourites"/>
  </button>
}

export default FavouritesButton;