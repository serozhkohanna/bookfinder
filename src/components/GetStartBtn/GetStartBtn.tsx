import React from 'react';
import { Link } from 'react-router-dom';
import './GetStartBrn.scss';

import { SEARCH_PAGE } from "../../constants/routes";

const GetStartBtn = () => {
  return (
	<button className='button primary is-large'>
	  <Link to={SEARCH_PAGE}>get started</Link>
	</button>
  )
}

export default GetStartBtn;