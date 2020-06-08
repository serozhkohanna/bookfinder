import React from 'react';
import { useHistory } from "react-router-dom";

import './BrowseByGenre.scss';
import { GENRES } from "../../constants/genres";
import { GenreItem, SearchParams } from '../../constants/interfaces';

import { connect } from 'react-redux';

import GenreBtn from "../GenreBtn/GenreBtn";

import { setBooks } from "../../actions/actions";
import { SEARCH_PAGE } from "../../constants/routes";

const BrowseByGenre = ({setBooks}) => {
  let history = useHistory();

  const getDataFromChild = (param) => {
	let params: SearchParams = {};
	params.subject = param.split(' ');

	setBooks(params);

	history.push(SEARCH_PAGE);
  }

  const genreItem = GENRES.map((item: GenreItem) => {
	return <GenreBtn setData={getDataFromChild} key={item.id} btnText={item.genre}
					 classes={'genre-browse'}/>
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

const mapDispatchToProps = {
  setBooks
}

export default connect(null, mapDispatchToProps)(BrowseByGenre);