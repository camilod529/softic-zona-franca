import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const login = ({ email, password }: { email: string; password: string }) => {
  console.log(email);
  return axios
    .post(`${API_URL}/session/login`, { nick: email, contrasena: password })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const createCompany = ({ nit, name }: { nit: string; name: string }) => {
  return axios
    .post(`${API_URL}/company`, { nit, nombre_empresa: name })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const createColaborator = ({
  documento_colaborador,
  empresa_colaborador,
  nombre_1,
  apellido_1,
  genero,
  correo_personal,
  fecha_nacimiento,
  foto,
}: {
  documento_colaborador: string;
  empresa_colaborador: string;
  nombre_1: string;
  apellido_1: string;
  genero: string;
  correo_personal: string;
  fecha_nacimiento: Date;
  foto: File | null;
}) => {
  return axios
    .post(
      `${API_URL}/colaborator`,
      {
        documento_colaborador,
        empresa_colaborador,
        nombre_1,
        apellido_1,
        genero,
        correo_personal,
        fecha_nacimiento,
        foto,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getCompanies = () => {
  return axios
    .get(`${API_URL}/company`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getCompanyByName = (name: string | null) => {
  return axios
    .get(`${API_URL}/company/name/${name}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getEvents = () => {
  return axios
    .get(`${API_URL}/events`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getColaborators = () => {
  return axios
    .get(`${API_URL}/colaborators`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
