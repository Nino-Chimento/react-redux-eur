import { Utility } from "../../utils/Utility";
import {
  FETCH_PRODUCTS_LIST_SUCCESS,
  FETCH_PRODUCTS_LIST_FAILURE,
  ACTION_DELETE_PRODUCT_SUCCESS,
  ACTION_DELETE_PRODUCT_FAILURE,
  ACTION_CREATE_PRODUCT_FAILURE,
  ACTION_CREATE_PRODUCT_SUCCESS,
} from "../actions";

export const reducerProducts = (prevState: any = {}, action: any) => {
  const clonedState = Utility.clone(prevState);

  switch (action.type) {
    case FETCH_PRODUCTS_LIST_SUCCESS:
      clonedState.list = action.payload.products;
      clonedState.error = "";
      break;
    case FETCH_PRODUCTS_LIST_FAILURE:
      clonedState.error = action.payload;
      break;
    case ACTION_DELETE_PRODUCT_SUCCESS:
      clonedState.list = clonedState.list.filter(
        (product: any) => product.id !== action.payload.id
      );
      clonedState.error = "";
      break;
    case ACTION_DELETE_PRODUCT_FAILURE:
      clonedState.error = action.payload;
      break;
    case ACTION_CREATE_PRODUCT_SUCCESS:
      clonedState.list = [...clonedState.list, action.payload];
      break;
    case ACTION_CREATE_PRODUCT_FAILURE:
      clonedState.error = action.payload;
      break;
    default:
      break;
  }
  return clonedState;
};
