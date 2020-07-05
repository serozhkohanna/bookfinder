import { combineReducers } from "redux";

import apiResponse from "./apiResponse";
import advancedRequest from "./advancedRequest";
import bookVolume from './bookVolume';

const reducer = combineReducers({
  apiResponse,
  advancedRequest,
  bookVolume
})

export default reducer;