import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import './SearchKeywords.scss';

import SearchIcon from '../../assets/icons/search.svg';
import CloseIcon from '../../assets/icons/close.svg';

import { setBooks, setAdvancedRequest } from "../../actions/actions";
import { connect } from 'react-redux';

import { SearchParams } from "../../constants/interfaces";
import { SEARCH_PAGE } from "../../constants/routes";

interface Props {
  className: string;
  setBooks: any;
  setAdvancedRequest: any;
  hasButton: boolean;
  // params: SearchParams
}

const SearchKeywords = ({className, setBooks, setAdvancedRequest, hasButton}: Props, searchInput: any) => {
  const [searchValue, setValue] = useState('');
  const [isFocus, setFocus] = useState(false);

  let history = useHistory();

  const handleSearchChange = (e: any) => {
	setValue(e.target.value);
  }

  const handleSearchComponentClick = (e: any) => {
	if (searchInput.contains(e.target)) {
	  setFocus(true)
	} else {
	  setFocus(false)
	}
  }

  const handleSearchSubmit = (e) => {
	e.preventDefault();

	let params: SearchParams = {};
	let keywords = searchInput.value;
	params.keywords = keywords.split(' ');
	params.startIndex = 0;

	setBooks(params);
	setAdvancedRequest(params);

	setValue('');
	setFocus(false);

	history.push(SEARCH_PAGE);
	setTimeout(setAnchor, 1000);
  }

  const setAnchor = () => {
    return window.location.hash = '#book-request';
  }

  return <div className={`search ${className}`}>
	<div className={`search-component ${(isFocus || hasButton) && 'active'}`} onClick={handleSearchComponentClick}>
	  <form className="search-input-wrapper" onSubmit={handleSearchSubmit}>
		<input ref={(input) => searchInput = input} minLength={1} required value={searchValue} onChange={handleSearchChange}
			   className='search-input' placeholder='Enter keywords'
			   type="text"/>
		{hasButton && <button className='button btn-submit secondary is-large'>submit</button>}
	  </form>
	  <div className="search-icon">
		<img src={SearchIcon} alt="search-icon"/>
	  </div>
	  {!hasButton && <div className="close-icon">
		<img src={CloseIcon} alt="close-icon"/>
	  </div>}
	</div>
  </div>
}

const mapDispatchToProps = {
  setBooks,
  setAdvancedRequest
}

export default connect(null, mapDispatchToProps)(SearchKeywords);