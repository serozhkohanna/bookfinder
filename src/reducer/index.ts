import { combineReducers } from "redux";

import apiResponse from "./apiResponse";
import advancedRequest from "./advancedRequest";

const reducer = combineReducers({
  apiResponse,
  advancedRequest
})

export default reducer;