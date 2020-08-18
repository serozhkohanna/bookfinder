import React from 'react';
import { useHistory } from "react-router-dom";

import './BrowseByGenre.scss';
import { GENRES } from "../../constants/genres";
import { GenreItem, SearchParams } from '../../constants/interfaces';

import { connect } from 'react-redux';

import GenreBtn from "../GenreBtn/GenreBtn";

import { setBooks, setAdvancedRequest } from "../../actions/actions";
import { SEARCH_PAGE } from "../../constants/routes";
import BooksImg from '../../assets/img/books.png';

const BrowseByGenre = ({setBooks, setAdvancedRequest}) => {
  let history = useHistory();

  const getDataFromChild = (param) => {
	let params: SearchParams = {};
	params.subject = param.split(' ');
	params.startIndex = 0;

	setBooks(params);
	setAdvancedRequest(params);

	history.push(SEARCH_PAGE);
	setTimeout(setAnchor, 1000);
  }

//TODO
//refactor setAnchor method, same is in SearchKeywords.tsx file, move to separate common file;

  const setAnchor = () => {
	return window.location.hash = '#book-request';
  }

  const genreItem = GENRES.map((item: GenreItem) => {
	return <GenreBtn setData={getDataFromChild} key={item.id} btnText={item.genre}
					 value={item.value}
					 classes={'genre-browse'}/>
  })

  return <section className='genres' id='genre-browse'>
	<h3 className='genres-title'>Browse by genre</h3>
	<div className="genres-content">
	  {genreItem}
	</div>
	<div className="genres-illustration">
	  <img src={BooksImg} alt="books"/>
	</div>
  </section>
}

const mapDispatchToProps = {
  setBooks,
  setAdvancedRequest
}

export default connect(null, mapDispatchToProps)(BrowseByGenre);