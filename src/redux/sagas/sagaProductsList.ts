import { call, put } from "redux-saga/effects";
import {
  FETCH_PRODUCTS_LIST_SUCCESS,
  FETCH_PRODUCTS_LIST_FAILURE,
} from "../actions";

const apiProductsList: any = async () => {
  const response = await fetch(
    `http://us-central1-test-b7665.cloudfunctions.net/api/stores/ijpxNJLM732vm8AeajMR/products`
  );
  return response.json();
};

export function* sagaProductsList(action: any) {
  try {
    const response = yield call(apiProductsList, action.payload);

    yield put({
      type: FETCH_PRODUCTS_LIST_SUCCESS,
      payload: { products: response },
    });
  } catch (error) {
    yield put({
      type: FETCH_PRODUCTS_LIST_FAILURE,
      payload: error.message,
    });
  }
}
