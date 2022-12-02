import axios from "axios";

const URL =
  process.env.NODE_ENV === "production"
    ? "https://us-central1-betterinfra-2d3f6.cloudfunctions.net/api"
    : "http://localhost:5001/betterinfra-2d3f6/us-central1/api";

export const api = axios.create({
  baseURL: URL,
});

export const addAuthHeader = () => {
  const token = JSON.parse(localStorage.getItem("user")!)?.token;
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
};

export const removeAuthHeader = () => {
  delete api.defaults.headers.common["Authorization"];
};
