import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "AMV1909",
  email: "",
  firstName: "",
  lastName: "",
  token: "",
  isLoggedIn: false,
  role: 0, // Administrador = 1, Colaborador = 3, Empresa = 2
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (_, action) => {
      return { ...action.payload };
    },
  },
});

export default userSlice.reducer;

export const { setUserInfo } = userSlice.actions;
