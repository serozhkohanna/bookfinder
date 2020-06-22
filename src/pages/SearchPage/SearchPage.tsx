import React from 'react';
import HeroAdvanced from "../../components/HeroAdvanced/HeroAdvanced";
import BookRequest from "../../components/BookRequest/BookRequest";

const SearchPage = () => {
  return <main id='search-page'>
	<div className="container">
	  <HeroAdvanced/>
	  <BookRequest/>
	</div>
  </main>
}

export default SearchPage;