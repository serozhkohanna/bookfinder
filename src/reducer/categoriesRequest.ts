import { SET_CATEGORIES } from '../constants/action-types';
import { ApiResponse } from "../constants/interfaces";

const initialState: ApiResponse = {
  apiResponse: []
}

export default function categoriesRequest(state: ApiResponse = initialState, action) {
  switch (action.type) {
	case SET_CATEGORIES:
	  return {
		...state,
		apiResponse: {...action.payload}
	  }
  }
  return state;
}
