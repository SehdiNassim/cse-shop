import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import reducers from "./reducers";
// import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();


const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
// sagaMiddleware.run();

export default store;
