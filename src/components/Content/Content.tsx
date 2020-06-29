import React from 'react';
import './Content.scss';
import { connect } from 'react-redux';
import { ApiResponse } from "../../constants/interfaces";

import SortParams from "../SortParams/SortParams";
import FilterParams from "../FilterParams/FilterParams";
import BookItemList from "../BookItemList/BookItemList";
import Pagination from "../Pagination/Pagination";

const Content = ({booksList, params}) => {
  const bookList = booksList.apiResponse;
  const resultOnPage = params.maxResults || 10;
  console.log(resultOnPage, 'res');
  return (
	<section className='content'>
	  {booksList.apiResponse.totalItems >= 0 &&
      <div className="content-header">
          <div className="books-count">
              <p><span>{bookList.totalItems}</span> items</p>
          </div>
          <SortParams/>
      </div>
	  }
	  <div className="content-body">
		{booksList.apiResponse.totalItems >= 0 && <FilterParams/>}
		{booksList.apiResponse.totalItems > 0 && <div className="books-list">
		  {booksList.apiResponse.items?.map((item, i) => {
			return (
			  <BookItemList key={i} bookItem={item}/>
			)
		  })}
        </div>}
	  </div>
	  <div className="content-footer">
		<Pagination/>
	  </div>
	</section>
  )
}

const mapStateToProps = ({apiResponse, advancedRequest}) => {
  return {
	booksList: apiResponse,
	params: advancedRequest
  }
}

export default connect(mapStateToProps)(Content);
