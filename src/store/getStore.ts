import { createStore, applyMiddleware } from "redux";
import reducer from "../reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { dateFormatting } from "./middleware/dateFormatting";

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk, dateFormatting))
);

export default store;
