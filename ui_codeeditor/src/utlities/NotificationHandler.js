import { useDispatch } from "react-redux";
import { setToaster } from "../store/slice/toasterSlice";

const useHandler = () => {
  const dispatch = useDispatch();

  const inputHandlerToaster = ({
    message = "",
    error = false,
    warning = false,
    info = false,
    success = false,
    open = true,
  }) => {
    dispatch(
      setToaster({
        message: message,
        error: error,
        warning: warning,
        info: info,
        success: success,
        open: open,
      })
    );
  };

  return inputHandlerToaster;
};

export default useHandler;
