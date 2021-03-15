import { call, put } from "redux-saga/effects";
import {
  ACTION_CREATE_PRODUCT_SUCCESS,
  ACTION_CREATE_PRODUCT_FAILURE,
} from "../actions";

const apiProductCreate: any = async (values: any) => {
  console.log(values);
  const response = await fetch(
    `http://us-central1-test-b7665.cloudfunctions.net/api/stores/ijpxNJLM732vm8AeajMR/products`,
    {
      headers: { "Content-Type": "application/json" },
      mode: "no-cors",
      method: "POST",
      body: values,
    }
  );
  return response;
};

export function* sagaProductCreate(action: any) {
  try {
    console.log("ok");

    const response = yield call(apiProductCreate, action.payload);
    yield put({
      type: ACTION_CREATE_PRODUCT_SUCCESS,
      payload: { products: response, id: action.payload },
    });
  } catch (error) {
    console.log("errore");

    yield put({
      type: ACTION_CREATE_PRODUCT_FAILURE,
      payload: error.message,
    });
  }
}
