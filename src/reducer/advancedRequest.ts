import { SET_ADVANCED_REQUEST } from "../constants/action-types";
import { AdvancedRequest } from "../constants/interfaces";

const initialState: AdvancedRequest = {
  bookTitle: '',
  bookAuthor: ''
}

export default function advancedRequests(state = initialState, action) {
  return state;
}