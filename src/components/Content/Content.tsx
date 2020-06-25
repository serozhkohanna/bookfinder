import React from 'react';
import './Content.scss';
import { connect } from 'react-redux';
import { ApiResponse } from "../../constants/interfaces";

import SortParams from "../SortParams/SortParams";
import FilterParams from "../FilterParams/FilterParams";
import BookItemList from "../BookItemList/BookItemList";

const Content = ({booksList}) => {
  const bookList = booksList.apiResponse;
  console.log(bookList, 'bookList');

  if (booksList.apiResponse.totalItems > 0) {
	return <section className='content'>
	  <div className="content-header">
		<div className="books-count">
		  <p><span>{bookList.totalItems}</span> items</p>
		</div>
		<SortParams/>
	  </div>
	  <div className="content-body">
		<FilterParams/>
		<div className="books-list">
		  {booksList.apiResponse.items?.map((item, i) => {
			return (
			  <BookItemList key={i} bookItem={item}/>
			)
		  })}
		</div>
	  </div>
	</section>
  } else if (booksList.apiResponse.totalItems === 0) {
	return <p>no results in this request</p>
  } else return null;
}

const mapStateToProps = ({apiResponse}: ApiResponse) => {
  return {
	booksList: apiResponse
  }
}

export default connect(mapStateToProps)(Content);
