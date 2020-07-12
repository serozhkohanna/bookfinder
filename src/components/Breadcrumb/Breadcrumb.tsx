import React from 'react';
import './Breadcrumb.scss';
import HomeIcon from '../../assets/icons/home.svg';
import { HOME_PAGE, SEARCH_PAGE } from "../../constants/routes";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Breadcrumb = ({bookVolume}) => {
  return <ul className='breadcrumb'>
	<li className='breadcrumb-item'><Link to={HOME_PAGE}><img src={HomeIcon} alt="home"/></Link></li>
	<li className='breadcrumb-item'><Link to={SEARCH_PAGE}>Search</Link></li>
	<li className='breadcrumb-item'>{bookVolume.volumeInfo?.title}</li>
  </ul>
}

const mapStateToProps = ({bookVolume}) => {
  return {
	bookVolume
  }
}

export default connect(mapStateToProps)(Breadcrumb);