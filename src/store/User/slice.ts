import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/types.d";

const initialState: User = {
  rol: 1,
  nick: "",
  nombre_1: "",
  nombre_empresa: "",
  edad: "",
  fecha_nacimiento: "",
  correo_personal: "",
  correo_empresarial: "",
  empresa_colaborador: "",
  genero: "",
  gustos: [],
  foto: "",
  contrasena: "",
  estado_colaborador: true,
  puntos: 0,
  puntos_acumulados: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (_, action: PayloadAction<User>) => {
      return { ...action.payload };
    },
  },
});

export default userSlice.reducer;

export const { setUserInfo } = userSlice.actions;
