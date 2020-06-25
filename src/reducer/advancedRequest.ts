import { SET_ADVANCED_REQUEST } from "../constants/action-types";
import { SearchParams } from "../constants/interfaces";

const initialState: SearchParams = {}

export default function advancedRequest(state = initialState, action) {
  switch (action.type) {
	case SET_ADVANCED_REQUEST:
	  return {
		...action.payload
	  }
  }
  return state;
}