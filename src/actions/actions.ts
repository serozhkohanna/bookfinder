import { SET_BOOKS } from "../constants/action-types";
import { apiKey, apiURL } from "../constants/googleApi";

import axios from 'axios';

export const setBooks = (params) => {
  let {intitle, inauthor, inpublisher, subject} = params;

  let url = `${apiURL}volumes?q=${intitle ? `intitle:${intitle}` : ''}+${inauthor ? `inauthor:${inauthor}` : ''}+${inpublisher ? `inpublisher:${inpublisher}` : ''}+${subject ? `subject:${subject}` : ''}&key=${apiKey}`;

  return dispatch => {
	axios.get(url)
	  .then(response => {
		dispatch({
		  type: SET_BOOKS,
		  payload: response.data
		})
	  })
  }
}