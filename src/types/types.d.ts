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
  nit: string?;
  foto: string;
  contrasena: string?;
  estado_colaborador: boolean?;
  puntos: number?;
  puntos_acumulados: number?;
  logo?: string;
  documento_colaborador: string?;
  primera_vez?: boolean;
};

export type customEvent = {
  title: string;
  notes: string;
  start: Date;
  end: Date;
  bgcolor: string;
};
export type Company = {
  nit?: string;
  nombre_empresa: string;
  puntos: number;
  logo: string;
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

export type Event = {
  id_evento: number;
  nombre_evento: string;
  descripcion_evento: string;
  fecha_evento: Date;
  fecha_evento_fin: Date;
  aforo_maximo: number;
  aforo_registrado: number;
  puntos_colaborador: number;
  puntos_empresa: number;
  puntos_castigo: number;
  estado_boolean: boolean;
  foto_evento: string;
};

export type Award = {
  id_premio: number;
  nombre_premio: string;
  detalles_premio: string;
  coste_premio: number;
  estado_premio: boolean;
  foto: string;
};

export type Tag = {
  id_etiqueta: number;
  nombre_etiqueta: string;
  descripcion_etiqueta: string;
  estado_etiqueta: boolean;
};
