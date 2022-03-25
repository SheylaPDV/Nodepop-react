import client from "../api/client";
// llamadas al api
const productsBaseUrl = "/api/products";

export const getLatestProducts = () => {
  const url = `${productsBaseUrl}?_expand=user&_embed=likes&_sort=updatedAt&_order=desc`;
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
