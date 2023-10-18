import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/types.d";

const initialState: User = {
  rol: 0,
  nick: "",
  nombre: "",
  edad: "",
  numeroContacto: "",
  correo: "",
  correoEmpresarial: "",
  empresa: "",
  genero: "",
  gustos: [],
  urlImg: "",
  contrasena: "",
  estado: true,
  puntos: 0,
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
