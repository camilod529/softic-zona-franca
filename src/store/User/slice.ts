import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/types.d";

const initialState: User = {
  rol: 1,
  nick: "",
  contrasena: "",
  estado: true,
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
