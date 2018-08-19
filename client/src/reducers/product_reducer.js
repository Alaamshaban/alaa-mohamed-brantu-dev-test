import { FETCH_PRODUCTS,FETCH_PRODUCT_BY_NAME } from "../actions";

const INITAL_STATE = { products: [] };

export default function (state = INITAL_STATE, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, products: action.payload.data };
    case FETCH_PRODUCT_BY_NAME:
      return { ...state, products: action.payload.data };
    default:
      return state;
  }
}
