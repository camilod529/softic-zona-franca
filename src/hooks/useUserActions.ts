import { useAppDispatch } from "./store";
import { setUserInfo } from "../store/User/slice";
import { User } from "../types/types.d";

export const useUserActions = () => {
  const dispatch = useAppDispatch();

  const setUser = (user: User) => {
    dispatch(setUserInfo(user));
  };

  return { setUser };
};
