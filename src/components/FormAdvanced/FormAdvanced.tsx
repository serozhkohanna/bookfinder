import React from 'react';
import './FormAdvanced.scss';

const FormAdvanced = () => {
  return <form className='advanced-form'>
	<div className="form-wrapper double">
	  <div className="form-wrapper-item">
		<input type="text" name="name" className="input-animated" id="book-title"
			   required autoComplete="off"/>
		<label htmlFor="book-title">
		  <span>Book Title</span>
		</label>
	  </div>
	  <div className="form-wrapper-item">
		<input type="text" name="name" className="input-animated" id="book-author"
			   required autoComplete="off"/>
		<label htmlFor="book-author">
		  <span>Book Author</span>
		</label>
	  </div>
	</div>

	<div className="form-wrapper triple">
	  <div className="form-wrapper-item">
		<label className='label' htmlFor="book-category">
		  <span>Book Title</span>
		</label>
		<select className='select' name="name" id="book-category">
		  <option value="fiction">Fiction</option>
		  <option value="drama">Drama</option>
		</select>
	  </div>
	  <div className="form-wrapper-item">
		<label className='label' htmlFor="book-category">
		  <span>Payment</span>
		</label>
		<div className="btn-wrapper">
		  <a className="link-bg">Free</a>
		  <a className="link-bg">Paid</a>
		</div>
	  </div>
	  <div className="form-wrapper-item">
		<label className='label' htmlFor="book-download">
		  <span>Download</span>
		</label>
		<div className="btn-wrapper">
		  <input type="checkbox"/>
		  <p>Epub</p>
		</div>
	  </div>
	</div>
  </form>
}

export default FormAdvanced;