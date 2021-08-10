import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

// import * as actionCreators from "/actions";

// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//   trace: true, // (action) => { return ‘trace as string’; }
//   traceLimit: 25,
// })


// const composeEnhancers = composeWithDevTools({ actionCreators, trace: true, traceLimit: 25 });

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools((applyMiddleware(...middleware) ) )
);

export default store;
