import { useDispatch } from "react-redux";
import { addUser, removeUser, removeAll } from "../store/slice/usersSlice";

const ProfileListHandler = () => {
  const dispatch = useDispatch();

  const addUserHandler = ({ id, name }) => {
    dispatch(
      addUser({
        id: id,
        name: name,
      })
    );
  };

  const removeUserHandler = ({ id }) => {
    dispatch(
      removeUser({
        id: id,
      })
    );
  };

  const removeAllUserHandler = () => {
    dispatch(removeAll());
  };

  return { addUserHandler, removeUserHandler, removeAllUserHandler };
};

export default ProfileListHandler;
