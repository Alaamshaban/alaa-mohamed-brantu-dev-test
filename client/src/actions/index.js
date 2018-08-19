import axios from "axios";

const ROOT_URL = "http://localhost:3000/products";

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const FETCH_PRODUCT_BY_NAME = "FETCH_PRODUCT_BY_NAME";

export function fetchProducts() {
  const url = `${ROOT_URL}`;
  const request = axios.get(url);

  return {
    type: FETCH_PRODUCTS,
    payload:request
  }
}

export function fetchProductsByName(searchTerm) {
  const url = `${ROOT_URL}/name/${searchTerm}`;
  const request = axios.get(url);

  return {
    type: FETCH_PRODUCT_BY_NAME,
    payload:request
  }
}
