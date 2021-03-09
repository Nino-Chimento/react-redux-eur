import { combineReducers, createStore, applyMiddleware } from "redux";
import { reducerPosts } from "./reducers/reducerPosts";
import { reducerProducts } from "./reducers/reducerProducts";
import { middlewares } from "./middlewares";
import { middlewareSaga } from "./middlewares/middlewareSaga";
import { composeWithDevTools } from "redux-devtools-extension";
import { takeLatest } from "redux-saga/effects";
import {
  FETCH_POSTS_LIST_REQUEST,
  FETCH_COMMENTS_LIST_REQUEST,
  FETCH_PRODUCTS_LIST_REQUEST,
  ACTION_DELETE_PRODUCT_REQUEST,
} from "./actions";

import { sagaProductsList } from "./sagas/sagaProductsList";
import { sagaProductDelete } from "./sagas/sagaProductDelete";

const initialState = {
  products: {
    list: [],
  },
};

const rootReducer = combineReducers({
  products: reducerProducts,
});

function* rootSaga() {
  yield takeLatest(FETCH_PRODUCTS_LIST_REQUEST, sagaProductsList);
  yield takeLatest(ACTION_DELETE_PRODUCT_REQUEST, sagaProductDelete);
  //
}

export const configureStore = () => {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  middlewareSaga.run(rootSaga);

  return store;
};
