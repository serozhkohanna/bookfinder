import { combineReducers } from "redux";

import apiResponse from "./apiResponse";
import advancedRequest from "./advancedRequest";
import bookVolume from './bookVolume';
import categoriesRequest from './categoriesRequest';

const reducer = combineReducers({
  apiResponse,
  advancedRequest,
  bookVolume,
  categoriesRequest
})

export default reducer;