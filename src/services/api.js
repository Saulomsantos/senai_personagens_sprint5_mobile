import axios from "axios";

const api = axios.create({
  baseURL: "https://salty-atoll-57329.herokuapp.com"
});

export default api;