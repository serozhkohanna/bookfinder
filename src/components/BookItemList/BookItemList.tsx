import React from 'react';
import './BookItemList.scss';


const BookItemList = ({bookItem}) => {
  console.log(bookItem.volumeInfo);
  return <div className='book-item'>
	<div className="book-item-img">
	  <img src={bookItem.volumeInfo.imageLinks.thumbnail} alt="book-item-img"/>
	</div>
	<div className="book-item-info">
	  <div className="info-header">
		<div className="title">
		  <h5>{bookItem.volumeInfo.title}</h5>
		</div>
		<div className="authors">
		  {bookItem.volumeInfo.authors?.map((item, i) => <p key={i}>{item}</p>)}
		</div>
	  </div>
	  <div className="info-content">
		<div className="info-desc">
		  <div className="desc">
			<p>{bookItem.volumeInfo.description}</p>
		  </div>
		  <button className="show-more">
			show more
		  </button>
		  <div className="info-links">
			google
		  </div>
		</div>
		<div className="info-params">

		</div>
	  </div>
	</div>
  </div>
}

export default BookItemList;