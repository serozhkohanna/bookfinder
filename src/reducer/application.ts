import { Application } from "../constants/interfaces";
import { SET_SIDEBAR } from "../constants/action-types";

const initialsState: Application = {
  isSidebarOpen: false
}

export default function application(state = initialsState, action) {
	switch (action.type) {
	  case SET_SIDEBAR:
	    return {
	      ...state,
		  isSidebarOpen: action.payload
		}
	}

	return state;
}