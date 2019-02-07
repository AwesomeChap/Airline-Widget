import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";

const logger = store => next => action => {
  if (typeof action !== "function") {
    console.log(`dispatching : ${action}`);
  }
  return next(action);
};

const middleware = [logger, thunk];

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(...middleware)
    // other store enhancers if any
  )
);

export default store;
