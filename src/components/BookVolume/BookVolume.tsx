import React, { useState, useEffect } from "react";
import './BookVolume.scss';
import { connect } from 'react-redux';
import BookIcon from '../../assets/icons/book.svg';

import SearchMore from "../SearchMore/SearchMore";
import BookVolumeCard from "../BookVolumeCard/BookVolumeCard";
import { apiKey, apiURL } from "../../constants/googleApi";
import noCoverImg from '../../assets/img/nocover.png';

const BookVolume = ({bookVolume}) => {
  const [seeMoreItem, setItem] = useState();

  useEffect(() => {
	if (bookVolume) {
	  let url = `${apiURL}volumes?q=subject:${bookVolume.volumeInfo.categories[0]}&key=${apiKey}`;

	  fetch(url)
		.then(res => res.json())
		.then(data => {
		  if (data.items.length > 0) {
			setItem(data.items.slice(0, 4));
		  }
		});
	}
  }, [])

  const renderItems = () => {
	if (seeMoreItem) {
	  return seeMoreItem.map((item, i) => {
		return <div key={i} className='body-item'>
		  <div className="img-wrapper">
			<img src={item.volumeInfo.imageLinks?.thumbnail || noCoverImg} alt="book-cover"/>
		  </div>
		  <div className="item-title">
			{item.volumeInfo.title}
		  </div>
		  <div className="item-author">
			{item.volumeInfo.authors[0]}
		  </div>
		</div>
	  })
	} else {
	  return null
	}
  }

  const renderCategories = (category) => {
	if (category) {
	  return <div className="bookVolume-categories">
		<div className="bookVolume-categories-header">
		  <h4>More in category <a className="link-bg"><b><i>{category}</i></b></a></h4>
		  <SearchMore category={category}/>
		</div>
		<div className="bookVolume-categories-body">
		  {renderItems()}
		</div>
	  </div>
	} else return null;
  }

  const renderBookVolume = () => {
	if (bookVolume) {
	  return <div>
		<div className="bookVolume-info">
		  <div className="volume-img">
			<img src={bookVolume.volumeInfo?.imageLinks?.thumbnail} alt="volume-img"/>
		  </div>
		  <div className="volume-content">
			<div className="volume-content-header">
			  <div className="title">
				<h5>{bookVolume.volumeInfo?.title}</h5>
			  </div>
			  <div className="authors">
				{bookVolume.volumeInfo?.authors?.map((item, i) => <p key={i}>{item}</p>)}
			  </div>
			  <div className="rating">
				{[1, 2, 3, 4, 5].map((item, i) => {
				  return (
					<svg className='star' key={i} width="15" height="15" viewBox="0 0 10 10"
						 fill={i < bookVolume.volumeInfo?.averageRating ? '#FFC107' : 'none'}
						 xmlns="http://www.w3.org/2000/svg">
					  <path
						d="M9.46964 3.89437L9.46929 3.89434L6.58303 3.62087L6.28261 3.5924L6.16827 3.31314L5.02737 0.526604C5.02733 0.526495 5.02728 0.526387 5.02724 0.526279C5.0217 0.513021 5.01446 0.505959 5.00959 0.502603C5.00488 0.499363 5.0019 0.499036 5.00004 0.499036C4.99819 0.499036 4.99529 0.499352 4.99069 0.502528C4.9859 0.505829 4.97856 0.512931 4.97293 0.526548C4.97291 0.526599 4.97289 0.526651 4.97287 0.526702L3.8318 3.31317L3.71745 3.59241L3.41705 3.62087L0.531174 3.89426C0.531138 3.89426 0.531101 3.89427 0.531064 3.89427C0.528568 3.89453 0.524758 3.89549 0.519608 3.89979C0.514215 3.90429 0.507123 3.91286 0.502608 3.92735C0.498117 3.94176 0.497954 3.95698 0.501592 3.97079C0.505212 3.98454 0.511656 3.99365 0.517558 3.99903L0.518491 3.99988L2.70017 5.99644L2.9119 6.19021L2.85089 6.47067L2.20767 9.42729C2.20766 9.42733 2.20765 9.42736 2.20764 9.4274C2.2002 9.462 2.2155 9.48705 2.22709 9.49583L9.46964 3.89437ZM9.46964 3.89437C9.47177 3.89457 9.47545 3.89537 9.48063 3.89969C9.48599 3.90417 9.4929 3.91258 9.49723 3.92656L9.97391 3.77888L9.49739 3.92709C9.50717 3.95854 9.49555 3.98711 9.48157 3.99988L9.48117 4.00024L7.29949 5.99641L7.08771 6.19018L7.14873 6.47067L7.792 9.42751C7.79201 9.42756 7.79203 9.42762 7.79204 9.42767C7.79929 9.4614 7.78438 9.48687 7.77199 9.49624L7.77195 9.49627C7.76888 9.4986 7.76659 9.49963 7.76522 9.50013C7.76378 9.50065 7.76266 9.50081 7.76183 9.50085C7.761 9.50089 7.76015 9.50081 7.75919 9.50056C7.7583 9.50033 7.75662 9.49977 7.75413 9.4982L7.75296 9.49747L5.26419 7.94476L5.00009 7.77999L4.73596 7.94471L2.24628 9.49743L2.24605 9.49757M9.46964 3.89437L2.24605 9.49757M2.24605 9.49757C2.24266 9.49969 2.24048 9.50043 2.2396 9.50068C2.23871 9.50094 2.23823 9.50096 2.23791 9.50096C2.23736 9.50096 2.23654 9.5009 2.23522 9.50045M2.24605 9.49757L2.23522 9.50045M2.23522 9.50045C2.23395 9.50003 2.23118 9.4989 2.22714 9.49587L2.23522 9.50045Z"
						stroke="#FFC107" strokeWidth="0.998073"/>
					</svg>
				  )
				})}
			  </div>
			  <div className="reviews">
				<p>
				  <span>{bookVolume.volumeInfo?.ratingsCount || '0'}</span>{bookVolume.volumeInfo?.ratingsCount > 1 ? 'reviews' : 'review'}
				</p>
			  </div>
			  <div className="labels">
				<div className="bookmark">
				  <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
					  d="M13.7072 0H0.494386C0.221509 0 5.38937e-07 0.221315 5.38937e-07 0.494386V19.0105C-0.000385675 19.3815 0.206831 19.7214 0.536679 19.8909C0.866721 20.0603 1.26377 20.0307 1.56485 19.8143L7.10081 15.8458L12.637 19.8141C12.9382 20.0302 13.3349 20.0595 13.6647 19.8901C13.9944 19.7208 14.2018 19.3811 14.2018 19.0105V0.494386C14.2018 0.221315 13.9803 0 13.7072 0ZM13.2128 19.0103L7.38914 14.8356C7.21687 14.7122 6.98513 14.7122 6.81306 14.8356L0.989158 19.0105V0.988772H13.2128V19.0103Z"
					  fill="#0E084B"/>
				  </svg>
				</div>
				<div className="buttons">
				  {bookVolume.volumeInfo?.categories && <button className="button danger is-medium">
					{bookVolume.volumeInfo?.categories[0]}
                  </button>}
				  {<button
					className='button info is-medium'>{Math.round(bookVolume.saleInfo?.retailPrice?.amount) || 'free'}
					<span>{bookVolume.saleInfo?.retailPrice?.currencyCode}</span></button>}
				</div>
			  </div>
			</div>
			<div className="volume-content-body">
			  <div className="body-description">
				<div className="subtitle">
				  About
				</div>
				<div className="desc">
				  <p>{bookVolume.volumeInfo?.description}</p>
				</div>
			  </div>
			  <div className="links">
				<div className="subtitle">
				  Get book
				</div>
				{bookVolume.accessInfo?.pdf.acsTokenLink &&
                <a href={bookVolume.accessInfo.pdf.acsTokenLink} className="link-bg">
                    PDF
                </a>}
				{bookVolume.accessInfo?.epub.acsTokenLink &&
                <a href={bookVolume.accessInfo?.epub.acsTokenLink} className="link-bg">
                    epub
                </a>}
				{bookVolume.accessInfo?.webReaderLink &&
                <a href={bookVolume.accessInfo.webReaderLink} className="link-bg">
                    Google Play
                </a>}
			  </div>
			</div>
		  </div>
		</div>
		<div className="bookVolume-details">
		  <BookVolumeCard bookVolume={bookVolume}/>
		  <div className="card-title">
			<h2>Advanced <b><i>book</i></b> details</h2>
			<div className="card-title-illustration">
			  <img src={BookIcon} alt="book"/>
			</div>
		  </div>
		</div>
		{renderCategories(bookVolume.volumeInfo?.categories[0])}
	  </div>
	} else return null
  }
  return <section className='bookVolume'>
	{renderBookVolume()}
  </section>
}

const mapStateToProps = ({bookVolume}) => {
  return {
	bookVolume
  }
}

export default connect(mapStateToProps)(BookVolume);