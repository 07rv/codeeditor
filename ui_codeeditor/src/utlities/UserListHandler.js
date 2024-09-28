import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../store/slice/usersSlice";

const userListHandler = () => {
  const dispatch = useDispatch();

  const addUserHandler = ({ user }) => {
    dispatch(addUser(user));
  };

  const removeUserHandler = ({ id }) => {
    dispatch(
      removeUser({
        id: id,
      })
    );
  };

  return { addUserHandler, removeUserHandler };
};

export default userListHandler;
