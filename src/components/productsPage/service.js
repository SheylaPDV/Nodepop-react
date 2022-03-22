import client from "../../api/client.js";

const productsBaseUrl = "/api/products";

export const getLatestProducts = () => {
  const url = `${productsBaseUrl}/products`;
  return client.get(url);
};

export const getProduct = productId => {
  const url = `${productsBaseUrl}/${productId}?_expand=user&_embed=likes`;
  return client.get(url);
};

export const createProduct = product => {
  const url = productsBaseUrl;
  return client.post(url, product);
};
