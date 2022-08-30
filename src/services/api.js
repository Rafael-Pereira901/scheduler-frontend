import axios from "axios";

const api = axios.create({
  // mockoon
  // baseURL: "http://127.0.0.1:5000",
  //backend
  // baseURL: "http://localhost:8080/",
  baseURL: "https://scheduler-backend-spring.herokuapp.com",
});

export default api;
