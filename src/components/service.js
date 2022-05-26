import client from "../api/client";
import { withFormData } from "../utils/withFormData";

const advertsBaseUrl = "/api/v1/adverts";

export const getLatestAdverts = () => {
  const url = `${advertsBaseUrl}`;
  return client.get(url);
};

export const getTags = () => {
  return client.get(`${advertsBaseUrl}/tags`);
};

export const getAdvert = (adverttId) => {
  const url = `${advertsBaseUrl}/${adverttId}`;
  return client.get(url);
};
export const createAdvert = withFormData((newAdvert) => {
  return client.post(advertsBaseUrl, newAdvert);
});

// export const createadvert = (advert) => {
//   const url = `${advertsBaseUrl}`;
//   const bodyFormData = new FormData();
//   bodyFormData.append("name", advert.name);
//   bodyFormData.append("sale", advert.sale);
//   bodyFormData.append("price", advert.price);
//   bodyFormData.append("tags", advert.tags);
//   bodyFormData.append("photo", advert.photo);

//   const headers = {
//     "Content-Type": "multipart/form-data",
//   };

//   return client.post(url, bodyFormData, { headers: headers });
// };

export const deleteAdvert = (advertId) => {
  const url = `${advertsBaseUrl}/${advertId}`;
  return client.delete(url);
};
