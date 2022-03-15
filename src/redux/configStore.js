import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/index";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const configStore = () => {
  const middlewares = [thunk, sagaMiddleware];
  const enchancers = [applyMiddleware(...middlewares)];
  const store = createStore(rootReducer, composeEnhancer(...enchancers));
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configStore;
