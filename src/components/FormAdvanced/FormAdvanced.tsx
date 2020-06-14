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
  </form>
}

export default FormAdvanced;