import React from 'react';
import './FormAdvanced.scss';
import { setBooks } from "../../actions/actions";
import { connect } from 'react-redux';
import { SearchParams } from "../../constants/interfaces";


interface searchParams {
  searchTitle?: (string | any);
  searchAuthor?: (string | any);
}

interface Props {
  setBooks: any;
}

const FormAdvanced = ({setBooks}: Props, {searchTitle, searchAuthor}: searchParams) => {
  const handleSearchSubmit = (e) => {
	e.preventDefault();

	let params: SearchParams = {};
	params.intitle = searchTitle.value;
	params.inauthor = searchAuthor.value;

	setBooks(params);
  }

  return <form className='advanced-form' onSubmit={handleSearchSubmit}>
	<div className="form-wrapper double">
	  <div className="form-wrapper-item">
		<input type="text" name="name" className="input-animated" id="book-title"
			   ref={(input) => searchTitle = input}
			   required autoComplete="off"/>
		<label htmlFor="book-title">
		  <span>Book Title</span>
		</label>
	  </div>
	  <div className="form-wrapper-item">
		<input type="text" name="name" className="input-animated" id="book-author"
			   ref={(input) => searchAuthor = input}
			   required autoComplete="off"/>
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
		<select className='select' name="name" id="book-category">
		  <option value="fiction">Fiction</option>
		  <option value="drama">Drama</option>
		</select>
	  </div>
	  <div className="form-wrapper-item">
		<label className='label'>
		  Payment
		</label>
		<div className="btn-wrapper">
		  <a className="link-bg">Free</a>
		  <a className="link-bg">Paid</a>
		</div>
	  </div>
	  <div className="form-wrapper-item">
		<label className='label' htmlFor="book-download">
		  Download
		</label>
		<div className="btn-wrapper">
		  <input className='checkbox' type="checkbox"/>
		  <p>Epub</p>
		</div>
	  </div>
	</div>

	<div className="form-wrapper triple">
	  <div className="form-wrapper-item">
		<label className='label' htmlFor="book-language">
		  Language
		</label>
		<select className='select' name="name" id="book-language">
		  <option value="fiction">English</option>
		  <option value="drama">German</option>
		</select>
	  </div>
	  <div className="form-wrapper-item">
		<label className='label'>
		  Return results
		</label>
		<div className="btn-wrapper">
		  <a className="link-bg is-small">10</a>
		  <a className="link-bg is-small">30</a>
		  <a className="link-bg is-small">50</a>
		</div>
	  </div>
	</div>
	<button className="button primary is-large">search</button>
  </form>
}

const mapDispatchToProps = {
  setBooks
}

export default connect(null, mapDispatchToProps)(FormAdvanced);