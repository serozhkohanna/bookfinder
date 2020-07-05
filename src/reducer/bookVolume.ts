import { SET_BOOK_VOLUME } from "../constants/action-types";

const initialState = {}

export default function bookVolume(state = initialState, action) {
  switch (action.type) {
	case SET_BOOK_VOLUME:
	  return {
		...action.payload,
	  }
  }
  return state
}