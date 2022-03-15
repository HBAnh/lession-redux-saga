import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/index";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configStore = () => {
    const middlewares = [ 
      thunk,
     ];
    const enchancers = [applyMiddleware(...middlewares)]
  const store = createStore(
      rootReducer, 
      composeEnhancer(...enchancers)
      );
  return store;
};
export default configStore;
