import React from 'react';

import Hero from "../../components/Hero/Hero";
import BrowseByGenre from '../../components/BrowseByGenre/BrowseByGenre';
import Cta from "../../components/Cta/Cta";

const MainPage = () => {
  return <main id='main-page'>
	<div className="container">
	  <Hero/>
	  <BrowseByGenre/>
	</div>
	<Cta/>
  </main>
}

export default MainPage;