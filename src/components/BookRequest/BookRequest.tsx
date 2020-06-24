import React from 'react';
import './BookRequest.scss';
import { connect } from 'react-redux';

const BookRequest = ({bookRequest}) => {
  const {intitle, inauthor, subject, filter} = bookRequest;

  const renderRequestInfo = () => {
	if (Object.values(bookRequest).length) {
	  return (
		<h4 className='book-request-title'>
		  {inauthor && <span className='name'>{inauthor}</span>}
		  {intitle && <span className='name'><b><i>{intitle}</i></b></span>}
		  {subject && <span>{subject}</span>}
		  {filter && <span>{filter}</span>}
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