import { SET_BOOKS } from "../constants/action-types";
import { ApiResponse } from "../constants/interfaces";

const initialState: ApiResponse = {
  apiResponse: []
}


export default function apiResponse(state: ApiResponse = initialState, action) {
  switch (action.type) {
	case SET_BOOKS:
	  return {
		...state,
		apiResponse: {...action.payload}
	  }
  }
  return state;
}
