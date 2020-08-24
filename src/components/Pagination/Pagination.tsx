import React from 'react';
import './Pagination.scss';
import { connect } from 'react-redux';
import { setBooks, setAdvancedRequest } from "../../actions/actions";

const Pagination = ({params, setBooks, setAdvancedRequest, pages}) => {
  const handlePageClick = (type) => {
	switch (type) {
	  case 'next':
		if (params.startIndex < pages) {
		  params.startIndex += 1;
		  setAdvancedRequest(params);
		  setBooks(params);
		}
		break;
	  case 'prev':
		if (params.startIndex !== 0) {
		  params.startIndex -= 1;
		  setAdvancedRequest(params);
		  setBooks(params);
		}
	}
  }

  return <section className='pagination'>
	<button disabled={params.startIndex === 0} className='pagination-btn prev'
			onClick={() => handlePageClick('prev')}>prev
	</button>
	<p className="desc">
	  page {params.startIndex} of {pages}
	</p>
	<button disabled={params.startIndex === pages} className='pagination-btn next'
			onClick={() => handlePageClick('next')}>next
	</button>
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
