import { combineReducers } from "redux";

import apiResponse from "./apiResponse";
import advancedRequest from "./advancedRequest";
import bookVolume from './bookVolume';
import application from "./application";

const reducer = combineReducers({
  apiResponse,
  advancedRequest,
  bookVolume,
  application
})

export default reducer;