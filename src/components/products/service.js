import client from "../../api/client.js";

const productsBaseUrl = "/api";

export const getLatestProducts = () => {
  const url = `${productsBaseUrl}/products`;
  return client.get(url);
};
