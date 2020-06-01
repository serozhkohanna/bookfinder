import React, { useState } from 'react';
import './SearchKeywords.scss';

import SearchIcon from '../../assets/icons/search.svg';
import CloseIcon from '../../assets/icons/close.svg';

interface Props {
  className: string;
}

const SearchKeywords = ({className}: Props, searchInput: any) => {
  const [searchValue, setValue] = useState('');
  const [isFocus, setFocus] = useState(false);

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

  const handleCloseClick = () => {
	setValue('');
  }

  return <div className={`search ${className}`}>
	<div className={`search-component ${isFocus && 'active'}`} onClick={handleSearchComponentClick}>
	  <div className="search-input-wrapper">
		<input ref={(input) => searchInput = input} value={searchValue} onChange={handleSearchChange}
			   className='search-input' placeholder='Search for keywords'
			   type="text"/>
	  </div>
	  <div className="search-icon">
		<img src={SearchIcon} alt="search-icon"/>
	  </div>
	  <div className="close-icon" onClick={handleCloseClick}>
		<img src={CloseIcon} alt="close-icon"/>
	  </div>
	</div>
  </div>
}

export default SearchKeywords;