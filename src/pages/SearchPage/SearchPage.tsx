import React from 'react';
import HeroAdvanced from "../../components/HeroAdvanced/HeroAdvanced";
import BookRequest from "../../components/BookRequest/BookRequest";
import Content from "../../components/Content/Content";

const SearchPage = () => {
  return <main id='search-page'>
	<div className="container">
	  <HeroAdvanced/>
	  <BookRequest/>
	  <Content/>
	</div>
  </main>
}

export default SearchPage;