import React from 'react';
import './BookRequest.scss';
import { connect } from 'react-redux';

const BookRequest = ({bookRequest}) => {
  const {intitle, inauthor, subject} = bookRequest;

  const renderRequestInfo = () => {
	if (Object.values(bookRequest).length) {
	  return (
		<h4 className='book-request-title'>
		  <span>{inauthor}</span> <span><b><i>{intitle}</i></b></span> {subject}
		</h4>
	  )
	}
  }

  return <section className="book-request">
	{renderRequestInfo()}
  </section>
}

const mapStateToProps = ({advancedRequest}) => {
  return {
	bookRequest: advancedRequest
  }
}

export default connect(mapStateToProps)(BookRequest);