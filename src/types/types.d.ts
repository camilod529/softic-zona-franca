export type User = {
  rol: number;
  nick: string;
  nombre: string;
  edad: string;
  numeroContacto: string;
  correo: string;
  empresa: string;
  genero: string;
  gustos: Array<string>;
  contrasena: string;
  estado: true;
  puntos: number;
  correoEmpresarial: string;
  urlImg: string;
};

export type customEvent = {
  title: string;
  notes: string;
  start: Date;
  end: Date;
  bgcolor: string;
};
