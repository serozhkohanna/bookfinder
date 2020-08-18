import React from 'react';
import './NoContent.scss';

import BookRequest from "../../BookRequest/BookRequest";

import NoContentImg from '../../../assets/img/no-content.svg';

const NoContent = () => {
  return <div className='no-content'>
	<div className="img-wrapper">
	  <img src={NoContentImg} alt="no-content"/>
	</div>
	<div className="title">
	  <p>Sorry, we could not find any matches for you request: <span><BookRequest/></span></p>
	</div>
  </div>
}

export default NoContent;