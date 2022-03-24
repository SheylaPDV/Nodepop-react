import client from "../../api/client";
// llamadas al api
const productsBaseUrl = "/api";

export const getLatestProducts = () => {
  const url = `${productsBaseUrl}`;
  return client.get(url);
};

export const getProduct = productId => {
  const url = `${productsBaseUrl}/${productId}`;
  return client.get(url);
};

export const createProduct = product => {
  const url = productsBaseUrl;
  return client.post(url, product);
};
