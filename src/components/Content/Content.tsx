import React from 'react';
import './Content.scss';
import { connect } from 'react-redux';
import { ApiResponse } from "../../constants/interfaces";

import SortParams from "../SortParams/SortParams";

const Content = ({booksList}) => {
  const bookList = booksList.apiResponse;

  return <section className='content'>
	<div className="content-header">
	  <div className="books-count">
		<p><span>{bookList.totalItems}</span> items</p>
	  </div>
	  <SortParams/>
	</div>
	<div className="content-body">
	  body
	</div>
  </section>
}

const mapStateToProps = ({apiResponse}: ApiResponse) => {
  return {
	booksList: apiResponse
  }
}

export default connect(mapStateToProps)(Content);
