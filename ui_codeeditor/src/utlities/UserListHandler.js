import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../store/slice/userSlice";

const userListHandler = () => {
  const dispatch = useDispatch();

  const addUserHandler = ({
    message = "",
    error = false,
    warning = false,
    info = false,
    success = false,
    open = true,
    position = "bottom-right",
  }) => {
    dispatch(
      addUser({
        message: message,
        error: error,
        warning: warning,
        info: info,
        success: success,
        open: open,
        position: position,
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

  return { addUserHandler, removeUserHandler };
};

export default userListHandler;
