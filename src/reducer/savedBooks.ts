import { SavedBooks } from "../constants/interfaces";
import { SET_SAVE, SET_UNSAVE } from "../constants/action-types";

const initialState: SavedBooks = {
  savedBooks: []
}

export default function savedBooks(state = initialState, action) {
  switch (action.type) {
    case SET_SAVE:
      return {
        ...state
      }
    case SET_UNSAVE:
      return {
        ...state
      }
  }

  return state;
}