import { call, put } from "redux-saga/effects";
import {
  ACTION_DELETE_PRODUCT_SUCCESS,
  ACTION_DELETE_PRODUCT_FAILURE,
} from "../actions";

const apiProductDelete: any = async (id: string) => {
  const response = await fetch(
    `http://us-central1-test-b7665.cloudfunctions.net/api/stores/ijpxNJLM732vm8AeajMR/products/${id}`,
    {
      method: "DELETE",
    }
  );
  return response;
};

export function* sagaProductDelete(action: any) {
  try {
    const response = yield call(apiProductDelete, action.payload);
    yield put({
      type: ACTION_DELETE_PRODUCT_SUCCESS,
      payload: { products: response, id: action.payload },
    });
  } catch (error) {
    yield put({
      type: ACTION_DELETE_PRODUCT_FAILURE,
      payload: error.message,
    });
  }
}
