import { SET_BOOKS, SET_ADVANCED_REQUEST } from "../constants/action-types";
import { apiKey, apiURL } from "../constants/googleApi";

import axios from 'axios';

export const setBooks = (params) => {
  let {intitle, inauthor, subject, filter, download, maxResults, langRestrict} = params;

  let url = `${apiURL}volumes?q=${intitle + '+inauthor:' + inauthor + '+subject:' + subject}${filter && `&filter=${filter}`}&${download && 'download=epub'}&${maxResults && `maxResults=${maxResults}`}&${langRestrict && `langRestrict=${langRestrict}`}&key=${apiKey}`;

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

export const setAdvancedRequest = payload => ({
  type: SET_ADVANCED_REQUEST,
  payload
})