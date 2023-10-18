import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const login = ({ nick, contrasena }) => {
  return axios
    .post(`${API_URL}/login`, { nick, contrasena })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
