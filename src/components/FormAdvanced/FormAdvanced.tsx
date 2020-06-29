import React, { useState } from 'react';
import './FormAdvanced.scss';
import { setBooks, setAdvancedRequest } from "../../actions/actions";
import { connect } from 'react-redux';
import { SearchParams, GenreItem } from "../../constants/interfaces";
import { GENRES } from "../../constants/genres";

interface searchParams {
  searchTitle?: (string | any);
  searchAuthor?: (string | any);
  selectedCategory?: (string | any);
  downloadType?: (boolean | any);
  selectedLanguage?: (string | any);
}

interface Props {
  setBooks: any;
  setAdvancedRequest: any;
}

const FormAdvanced = ({setBooks, setAdvancedRequest}: Props, {searchTitle, searchAuthor, downloadType, selectedCategory, selectedLanguage}: searchParams) => {
  const [filter, setFilter] = useState('');
  const [maxResults, setMaxResults] = useState(10);

  const handleSearchSubmit = (e) => {
	e.preventDefault();

	let params: SearchParams = {};
	params.intitle = searchTitle.value;
	params.inauthor = searchAuthor.value;
	params.subject = selectedCategory.value;
	params.filter = filter ? filter.split(' ') : [];
	params.download = downloadType.checked && 'epub';
	params.maxResults = maxResults;
	params.langRestrict = selectedLanguage.value.split(' ');
	params.startIndex = 0;
	params.keywords = [];

	setBooks(params);
	setAdvancedRequest(params);
  }

  const handlePayment = (type) => {
	setFilter(type);
  }

  const handleMaxResult = (num) => {
	setMaxResults(num);
  }

  return <form className='advanced-form' onSubmit={handleSearchSubmit}>
	<div className="form-wrapper double">
	  <div className="form-wrapper-item">
		<input type="text" name="name" className="input-animated" id="book-title"
			   ref={(input) => searchTitle = input}
			   required
			   autoComplete="off"/>
		<label htmlFor="book-title">
		  <span>Book Title</span>
		</label>
	  </div>
	  <div className="form-wrapper-item">
		<input type="text" name="name" className="input-animated" id="book-author"
			   ref={(input) => searchAuthor = input}
			   required
			   autoComplete="off"
		/>
		<label htmlFor="book-author">
		  <span>Book Author</span>
		</label>
	  </div>
	</div>

	<div className="form-wrapper triple">
	  <div className="form-wrapper-item">
		<label className='label' htmlFor="book-category">
		  Book Category
		</label>
		<select className='select' name="name" id="book-category"
				ref={(category) => selectedCategory = category}>
		  <option value="">All Categories</option>
		  {GENRES.map((item: GenreItem) => {
			return (
			  <option key={item.id} value={item.value}>{item.genre}</option>
			)
		  })}
		</select>
	  </div>
	  <div className="form-wrapper-item">
		<label className='label'>
		  Payment
		</label>
		<div className="btn-wrapper">
		  <a className={`link-bg ${filter === 'free-ebooks' ? 'active' : ''}`}
			 onClick={() => handlePayment('free-ebooks')}>Free</a>
		  <a className={`link-bg ${filter === 'paid-ebooks' ? 'active' : ''}`}
			 onClick={() => handlePayment('paid-ebooks')}>Paid</a>
		</div>
	  </div>
	  <div className="form-wrapper-item">
		<label className='label' htmlFor="book-download">
		  Download
		</label>
		<div className="btn-wrapper">
		  <input className='checkbox' type="checkbox" ref={(checkboxValue => downloadType = checkboxValue)}/>
		  <p>Epub</p>
		</div>
	  </div>
	</div>

	<div className="form-wrapper triple">
	  <div className="form-wrapper-item">
		<label className='label' htmlFor="book-language">
		  Language
		</label>
		<select className='select' name="name" id="book-language"
				ref={(langValue) => selectedLanguage = langValue}>
		  {/*<option value="en">Any langua</option>*/}
		  <option value="">Any language</option>
		  <option value="en">English</option>
		  <option value="fr">French</option>
		  <option value="de">German</option>
		</select>
	  </div>
	  <div className="form-wrapper-item">
		<label className='label'>
		  Return results
		</label>
		<div className="btn-wrapper">
		  <a className={`link-bg is-small ${maxResults === 10 ? 'active' : ''}`}
			 onClick={() => handleMaxResult(10)}>10</a>
		  <a className={`link-bg is-small ${maxResults === 20 ? 'active' : ''}`}
			 onClick={() => handleMaxResult(20)}>20</a>
		  <a className={`link-bg is-small ${maxResults === 40 ? 'active' : ''}`}
			 onClick={() => handleMaxResult(40)}>40</a>
		</div>
	  </div>
	</div>
	<button className="button primary is-large">search</button>
  </form>
}

const mapDispatchToProps = {
  setBooks,
  setAdvancedRequest
}

export default connect(null, mapDispatchToProps)(FormAdvanced);