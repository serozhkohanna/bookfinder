import React from 'react';
import Hero from "../../components/Hero/Hero";
import BrowseByGenre from '../../components/BrowseByGenre/BrowseByGenre';

const MainPage = () => {
  return <main id='main-page' className='container'>
	<Hero/>
	<BrowseByGenre/>
  </main>
}

export default MainPage;