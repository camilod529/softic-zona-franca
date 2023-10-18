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
