import React from 'react';
import HeartIcon from '../../assets/icons/heart.png';
import { connect } from 'react-redux';
import { setSidebar } from "../../actions/actions";

const FavouritesButton = ({isSidebarOpen, setSidebar}) => {
  const handleSidebar = () => {
	setSidebar(!isSidebarOpen);
  }

  return <button className='favourite-icon' onClick={handleSidebar}>
	<img src={HeartIcon} alt="favourites"/>
  </button>
}
const mapStateToProps = ({application}) => {
  return {
	isSidebarOpen: application.isSidebarOpen
  }
}

const mapDispatchToProps = {
  setSidebar
}

export default connect(mapStateToProps, mapDispatchToProps)(FavouritesButton);