import { useDispatch } from "react-redux";
import { deleteUserById } from "../usersSlice";

export const useUserActions = () => {
  const dispatch = useDispatch();

  const removeUser = (id) => {
    dispatch(deleteUserById(id));
  };

  return {
    removeUser,
  };
};
