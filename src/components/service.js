import client from '../api/client';
// llamadas al api
/////////////////////////////////////////////////////////

const productsBaseUrl = '/api/v1/adverts';

/////////////////////////OBTENER TODOS LOS PRODUCTOS////////////////////////////////

export const getLatestProducts = () => {
  const url = `${productsBaseUrl}`;
  return client.get(url);
};

//////////////////////////OBTENER PRODUCTO///////////////////////////////

export const getProduct = (productId) => {
  const url = `${productsBaseUrl}/${productId}`;
  return client.get(url);
};

///////////////////////////CREAR PRODUCTO//////////////////////////////

export const createProduct = (product) => {
  const url = `${productsBaseUrl}`;
  const bodyFormData = new FormData();
  bodyFormData.append('name', product.name);
  bodyFormData.append('sale', product.sale);
  bodyFormData.append('price', product.price);
  bodyFormData.append('tags', product.tags);

  const headers = {
    'Content-Type': 'multipart/form-data',
  };

  return client.post(url, bodyFormData, { headers: headers });
};

export const deleteProduct = (productId) => {
  const url = `${productsBaseUrl}/${productId}`;
  return client.delete(url);
};
