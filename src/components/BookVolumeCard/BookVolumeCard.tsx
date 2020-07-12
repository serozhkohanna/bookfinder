import React from 'react';
import './BookVolumeCard.scss';

const BookVolumeCard = ({bookVolume}) => {
  console.log(bookVolume, 'bookVolume');

  return <div className='book-volume-card'>
	<div className="card-left">
	  <div className="card-params">
		<p>
		  <b>Publisher</b>
		  {bookVolume.volumeInfo.publisher ? bookVolume.volumeInfo.publisher : 'Unknown'}
		</p>
	  </div>
	  <div className="card-params">
		<p>
		  <b>Publication date</b>
		  {bookVolume.volumeInfo.publishedDate}
		</p>
	  </div>
	  {bookVolume.volumeInfo.industryIdentifiers.map((item, i) => {
		return (
		  <div key={i} className='card-params'>
			<p>
			  <b>
				{item.type}
			  </b>
			  {item.identifier}
			</p>
		  </div>
		)
	  })}
	</div>
	<div className="card-right">
	  <div className="card-params">
		<p>
		  <b>Language</b>
		  {bookVolume.volumeInfo.language}
		</p>
	  </div>
	  <div className="card-params">
		<p>
		  <b>Pages</b>
		  {bookVolume.volumeInfo.pageCount}
		</p>
	  </div>
	  <div className="card-params">
		<p>
		  <b>Print type</b>
		  {bookVolume.volumeInfo.printType}
		</p>
	  </div>
	</div>
	<div className="subtitle">
	  Get book
	</div>
	<div className="access-info">
	  <div className="card-params">
		<p>
		  <b>Country</b>
		  Ukraine
		</p>
	  </div>
	  <div className="card-params">
		<p>
		  <b>Viewability</b>
		  Partial
		</p>
	  </div>
	</div>
  </div>
}

export default BookVolumeCard;