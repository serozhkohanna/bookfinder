import React from 'react';
import './Pagination.scss';
import { connect } from 'react-redux';
import { SearchParams, ApiResponse } from "../../constants/interfaces";
import { setBooks, setAdvancedRequest } from "../../actions/actions";

interface Props {

}

const Pagination = ({params, setBooks, setAdvancedRequest}) => {
  console.log(params.startIndex, 'page');

  const handlePageClick = (type) => {
	switch (type) {
	  case 'next':
		params.startIndex += 1;
		setAdvancedRequest(params);
		setBooks(params);
		break;
	}
  }

  return <section className='pagination'>
	<button className='pagination-btn prev' onClick={() => handlePageClick('prev')}>prev</button>
	<button className='pagination-btn next' onClick={() => handlePageClick('next')}>next</button>
  </section>
}

const mapStateToProps = ({advancedRequest}) => {
  return {
	params: advancedRequest
  }
}

const mapDispatchToProps = {
  setAdvancedRequest,
  setBooks
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
