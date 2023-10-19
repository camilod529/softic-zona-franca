export type User = {
  rol: number?;
  nick: string?;
  nombre_1: string?;
  nombre_empresa: string?;
  edad: string?;
  fecha_nacimiento: string?;
  correo_personal: string?;
  correo_empresarial: string?;
  empresa_colaborador: string?;
  genero: string?;
  gustos: Array<string>?;
  foto: string;
  contrasena: string?;
  estado_colaborador: boolean?;
  puntos: number?;
  puntos_acumulados: number?;
};

export type customEvent = {
  title: string;
  notes: string;
  start: Date;
  end: Date;
  bgcolor: string;
};

export type Company = {
  nombre_empresa: string;
  puntos: number;
};

export type Colaborator = {
  apellido_1: string;
  apellido_2: string;
  correo_empresarial: string;
  correo_personal: string;
  date_insert: string;
  date_update: null;
  documento_colaborador: string;
  empresa_colaborador: string;
  estado_colaborador: boolean;
  fecha_nacimiento: string;
  foto: string;
  genero: string;
  nombre_1: string;
  nombre_2: string;
  puntos_acumulados: number;
  user_insert: string;
  user_update: null;
};
