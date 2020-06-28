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
		  <a className="show-more">
			Show more
		  </a>
		  <div className="info-links">
			<div className="subtitle">
			  Get book
			</div>
			{bookItem.accessInfo.pdf.acsTokenLink && <a href={bookItem.accessInfo.pdf.acsTokenLink} className="link-bg">
                PDF
            </a>}
			{bookItem.accessInfo.epub.acsTokenLink &&
            <a href={bookItem.accessInfo.epub.acsTokenLink} className="link-bg">
                epub
            </a>}
			{bookItem.accessInfo.webReaderLink && <a href={bookItem.accessInfo.webReaderLink} className="link-bg">
                Google Play
            </a>}
		  </div>
		</div>
		<div className="info-params">

		</div>
	  </div>
	</div>
  </div>
}

export default BookItemList;