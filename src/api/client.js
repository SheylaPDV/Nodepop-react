import axios from "axios";
//esto es un interceptor para traerte solo lo que te interesa
const client = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

client.interceptors.response.use((response) => response.data); //para que llegue solo el dato que es lo que me itneresa

export default client;