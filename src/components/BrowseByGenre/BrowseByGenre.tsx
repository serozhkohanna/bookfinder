import React from 'react';
import './BrowseByGenre.scss';
import { GENRES } from "../../constants/genres";
import GenreItem from '../../constants/interfaces';

import GenreBtn from "../GenreBtn/GenreBtn";

const BrowseByGenre = () => {
  const genreItem = GENRES.map((item: GenreItem) => {
	return <GenreBtn btnText={item.genre} classes={'genre-browse'}/>
  })

  return <section className='genres' id='genre-browse'>
	<h3 className='genres-title'>Browse by genre</h3>
	<div className="genres-content">
	  {genreItem}
	</div>
	<div className="genres-illustration">
	</div>
  </section>
}

export default BrowseByGenre;