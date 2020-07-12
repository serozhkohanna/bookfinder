import React from 'react';
import { useHistory } from "react-router-dom";
import './Content.scss';
import { connect } from 'react-redux';
import { SEARCH_PAGE } from "../../constants/routes";
import { setBookVolume, setMore } from "../../actions/actions";

import SortParams from "../SortParams/SortParams";
import FilterParams from "../FilterParams/FilterParams";
import BookItemList from "../BookItemList/BookItemList";
import Pagination from "../Pagination/Pagination";

const Content = ({booksList, params, setBookVolume, setMore}) => {
  let history = useHistory();
  const bookList = booksList.apiResponse;
  const resultOnPage = params.maxResults || 10;
  const pages = Math.floor(bookList.totalItems / resultOnPage);

  const receiveCallback = (item) => {
	history.push(`${SEARCH_PAGE}/${item.id}`);
	setBookVolume(item);
	setMore(item.volumeInfo?.categories[0]);
  }

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
			  <BookItemList sendCallback={() => receiveCallback(item)} key={i} bookItem={item}/>
			)
		  })}
        </div>}
	  </div>
	  <div className="content-footer">
		{pages > 0 && <Pagination pages={pages}/>}
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

const mapStateToDispatch = {
  setBookVolume,
  setMore
}

export default connect(mapStateToProps, mapStateToDispatch)(Content);
