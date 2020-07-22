import React from 'react';
import HeartIcon from '../../assets/icons/heart.png';
import { connect } from 'react-redux';
import { setSidebar } from "../../actions/actions";
import './FavouritesButton.scss'

const FavouritesButton = ({setSidebar}) => {
  const handleSidebar = () => {
	setSidebar(true);
  }

  return <button className='favourite-icon' onClick={handleSidebar}>
	<img src={HeartIcon} alt="favourites"/>
  </button>
}

const mapDispatchToProps = {
  setSidebar
}

export default connect(null, mapDispatchToProps)(FavouritesButton);