import { useAppDispatch } from "./store";
import { setUserInfo } from "../store/User/slice";

export const useUserActions = () => {
  const dispatch = useAppDispatch();

  const setUser = (user) => {
    dispatch(setUserInfo(user));
  };

  return { setUser };
};
