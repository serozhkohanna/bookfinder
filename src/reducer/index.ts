import { combineReducers } from "redux";

import apiResponse from "./apiResponse";
import advancedRequest from "./advancedRequest";
import bookVolume from './bookVolume';
import application from "./application";
import savedBooks from "./savedBooks";

const reducer = combineReducers({
  apiResponse,
  advancedRequest,
  bookVolume,
  application,
  savedBooks
})

export default reducer;