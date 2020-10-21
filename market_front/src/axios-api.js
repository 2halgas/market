import axios from "axios";
import config from "./config";
import store from "./store/configureStore";


const instance = axios.create({
  baseURL: config.apiURL
});

instance.interceptors.request.use((config) => {
  config.headers.Token = store.getState().users.user && store.getState().users.user.token;
  return config;
});

export default instance;