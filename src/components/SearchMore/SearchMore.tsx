import React from 'react';
import { useHistory } from "react-router";
import './SearchMore.scss';
// import { setMore } from "../../actions/actions";

import { setBooks, setAdvancedRequest } from "../../actions/actions";
import { SEARCH_PAGE } from "../../constants/routes";

import { connect } from 'react-redux';
import { SearchParams } from "../../constants/interfaces";

const SearchMore = ({setBooks, setAdvancedRequest, category}) => {
  let history = useHistory();

  const handleMoreClick = (param) => {
	let params: SearchParams = {};
	params.subject = param.split(' ');
	params.startIndex = 0;

	setBooks(params);
	setAdvancedRequest(params);

	history.push(SEARCH_PAGE);
  }

  console.log(category, 'categ')
  return <button className='search-more' onClick={() => handleMoreClick(category)}>see all</button>
}

const mapDispatchToProps = {
  setBooks,
  setAdvancedRequest
}

export default connect(null, mapDispatchToProps)(SearchMore);