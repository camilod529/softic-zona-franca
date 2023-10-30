import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const login = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  console.log(email);
  return axios
    .post(
      `${API_URL}/session/login`,
      { nick: email, contrasena: password },
      {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      }
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const createCompany = ({ nit, name }: { nit: string; name: string }) => {
  return axios
    .post(
      `${API_URL}/company`,
      { nit, nombre_empresa: name },
      {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      }
    )
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
          "x-access-token": localStorage.getItem("token"),
        },
      }
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getCompanies = () => {
  return axios
    .get(`${API_URL}/company`, {
      headers: { "x-access-token": localStorage.getItem("token") },
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getCompanyByName = (name: string | null) => {
  return axios
    .get(`${API_URL}/company/name/${name}`, {
      headers: { "x-access-token": localStorage.getItem("token") },
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getEvents = () => {
  return axios
    .get(`${API_URL}/events`, {
      headers: { "x-access-token": localStorage.getItem("token") },
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getColaborators = () => {
  return axios
    .get(`${API_URL}/colaborators`, {
      headers: { "x-access-token": localStorage.getItem("token") },
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getColaboratorsByCompany = () => {
  return axios
    .get(`${API_URL}/colaborators/byCompany/`, {
      headers: { "x-access-token": localStorage.getItem("token") },
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const createAward = async ({
  nombre_premio,
  detalles_premio,
  coste_premio,
  foto,
}: {
  nombre_premio: string;
  detalles_premio: string;
  coste_premio: number;
  foto: File | null;
}) => {
  return axios
    .post(
      `${API_URL}/awards`,
      {
        nombre_premio,
        detalles_premio,
        coste_premio,
        foto,
      },
      {
        headers: {
          "x-access-token": localStorage.getItem("token"),
          "Content-Type": "multipart/form-data",
        },
      }
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getAwards = async () => {
  return axios
    .get(`${API_URL}/awards`, {
      headers: { "x-access-token": localStorage.getItem("token") },
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const updateAwardState = async ({
  id_premio,
}: {
  id_premio: number;
}) => {
  return axios
    .put(
      `${API_URL}/awards/updateState/${id_premio}`,
      {},
      {
        headers: { "x-access-token": localStorage.getItem("token") },
      }
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const deactivateEvent = async ({ id_evento }: { id_evento: number }) => {
  return axios
    .put(
      `${API_URL}/events/deactivate/${id_evento}`,
      {},
      {
        headers: { "x-access-token": localStorage.getItem("token") },
      }
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const createEvent = async ({
  nombre_evento,
  descripcion_evento,
  fecha_evento,
  fecha_evento_fin,
  aforo_registrado,
  aforo_maximo,
  puntos_colaborador,
  puntos_empresa,
  puntos_castigo,
  foto_evento,
}: {
  nombre_evento: string;
  descripcion_evento: string;
  fecha_evento: Date;
  fecha_evento_fin: Date;
  aforo_registrado: number;
  aforo_maximo: number;
  puntos_colaborador: number;
  puntos_empresa: number;
  puntos_castigo: number;
  foto_evento: File | null;
}) => {
  return axios
    .post(
      `${API_URL}/events`,
      {
        nombre_evento,
        descripcion_evento,
        fecha_evento: new Date(fecha_evento),
        fecha_evento_fin: new Date(fecha_evento_fin),
        aforo_registrado,
        aforo_maximo,
        puntos_colaborador,
        puntos_empresa,
        puntos_castigo,
        foto_evento,
      },
      {
        headers: {
          "x-access-token": localStorage.getItem("token"),
          "Content-Type": "multipart/form-data",
        },
      }
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const deactivateColaborator = async ({
  documento_colaborador,
}: {
  documento_colaborador: string;
}) => {
  return axios
    .put(
      `${API_URL}/colaborator/deactivate/${documento_colaborador}`,
      {},
      {
        headers: { "x-access-token": localStorage.getItem("token") },
      }
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const reclaimAward = async ({ id_premio }: { id_premio: number }) => {
  return axios
    .put(
      `${API_URL}/awards/reclaim/${id_premio}`,
      {},
      {
        headers: { "x-access-token": localStorage.getItem("token") },
      }
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getTags = async () => {
  return axios
    .get(`${API_URL}/tags`, {
      headers: { "x-access-token": localStorage.getItem("token") },
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const saveTags = async ({
  tagsSelected,
}: {
  tagsSelected: number[];
}) => {
  return axios
    .post(
      `${API_URL}/tags/setTagsToColaborator`,
      { tags: tagsSelected },
      {
        headers: { "x-access-token": localStorage.getItem("token") },
      }
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getTagsByColaborator = async () => {
  return axios
    .get(`${API_URL}/tagsByColaborator`, {
      headers: { "x-access-token": localStorage.getItem("token") },
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
