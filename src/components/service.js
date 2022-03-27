import client from '../api/client';

const productsBaseUrl = '/api/v1/adverts';

export const getLatestProducts = () => {
  const url = `${productsBaseUrl}`;
  return client.get(url);
};

export const getProduct = (productId) => {
  const url = `${productsBaseUrl}/${productId}`;
  return client.get(url);
};

export const createProduct = (product) => {
  const url = `${productsBaseUrl}`;
  const bodyFormData = new FormData();
  bodyFormData.append('name', product.name);
  bodyFormData.append('sale', product.sale);
  bodyFormData.append('price', product.price);
  bodyFormData.append('tags', product.tags);
  bodyFormData.append('photo', product.photo);

  const headers = {
    'Content-Type': 'multipart/form-data',
  };

  return client.post(url, bodyFormData, { headers: headers });
};

export const deleteProduct = (productId) => {
  const url = `${productsBaseUrl}/${productId}`;
  return client.delete(url);
};
