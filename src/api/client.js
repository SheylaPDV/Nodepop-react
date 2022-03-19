import axios from "axios";
//esto es un interceptor para traerte solo lo que te interesa
const client = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

client.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (!error.response) {
      return Promise.reject({ message: error.message });
    }
    return Promise.reject({
      message: error.response.statusText,
      ...error.response,
      ...error.response.data,
    });
  }
);
//para que llegue solo el dato que es lo que me itneresa

export const setAuthorizationHeader = (token) =>
  (client.defaults.headers.common["Authorization"] = `Bearer ${token}`);

export const removeAuthorizationHeader = () => {
  delete client.defaults.headers.common["Authorization"];
};

export default client;
