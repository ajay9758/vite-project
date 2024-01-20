import axios from "axios";

let x = "";
// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === "production") {
  x = "139.59.65.128";
  // x = "localhost:8000";
} else {
  x = "localhost:8000";
}

export const mediaUrl = `http://${x}`;

const instance = axios.create({
  baseURL: `http://${x}/api/`,
  timeout: 5000,
});

export default instance;
