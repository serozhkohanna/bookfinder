import React, { useState } from 'react';
import './SearchPage.scss'
import HeroAdvanced from "../../components/HeroAdvanced/HeroAdvanced";
import HeroQuick from "../../components/HeroQuick/HeroQuick";
import BookRequest from "../../components/BookRequest/BookRequest";
import Content from "../../components/Content/Content";

const SearchPage = () => {
  const [activeLink, setActiveLink] = useState('quick');

  const setActive = (type) => {
    setActiveLink(type);
  }

  const renderSearch = () => {
    if (activeLink === 'advanced') {
      return <HeroAdvanced/>
	} else {
      return <HeroQuick/>
	}
  }

  return <main id='search-page'>
	<div className="container">
	  <nav className='nav-switch'>
		<a className={`nav-link ${activeLink === 'quick' && 'is-active'}`} onClick={() => setActive('quick')}>
		  Quick search
		</a>
		<a className={`nav-link ${activeLink === 'advanced' && 'is-active'}`} onClick={() => setActive('advanced')}>
		  Advanced search
		</a>
	  </nav>
	  {renderSearch()}
	  <BookRequest/>
	  <Content/>
	</div>
  </main>
}

export default SearchPage;