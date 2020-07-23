import { SavedBooks } from "../constants/interfaces";
import { SET_SAVE, SET_REMOVE_ALL } from "../constants/action-types";

const initialState: SavedBooks = {
  savedBooks: []
}

export default function savedBooks(state = initialState, action) {
  switch (action.type) {
	case SET_SAVE:
	  return {
		...state,
		savedBooks: state.savedBooks.includes(action.payload) ? state.savedBooks.filter(item => {
		  return action.payload !== item
		}) : [...state.savedBooks, action.payload]
	  }
	case SET_REMOVE_ALL:
	  return {
		savedBooks: []
	  }
  }

  return state;
}