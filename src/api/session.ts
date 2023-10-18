import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const login = ({ email, password }: { email: string; password: string }) => {
  console.log(email);
  return axios
    .post(`${API_URL}/login`, { nick: email, contrasena: password })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
