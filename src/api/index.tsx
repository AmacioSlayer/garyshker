import axios from "axios";

const ApiInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Accept-Language": "ru",
  },
});

export default ApiInstance;
export { ApiInstance as Api };
