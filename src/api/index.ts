import axios from "axios";

export const login = () => {
  axios.interceptors.request.use(function (config) {
    config.headers["Access-Control-Allow-Origin"] = "*";

    return config;
  });

  return axios.get("http://localhost:3001/auth/google/pops");
};
