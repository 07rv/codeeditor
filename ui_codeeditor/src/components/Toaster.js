import { useEffect, useCallback } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setToaster } from "../store/slice/toasterSlice";

const Toaster = () => {
  const dispatch = useDispatch();
  const toasterInfo = useSelector((state) => state.toaster.value);

  const closeToaster = useCallback(() => {
    dispatch(
      setToaster({
        message: "",
        error: false,
        warning: false,
        info: false,
        success: false,
        open: false,
      })
    );
  }, [dispatch]);

  const getPositionClasses = () => {
    switch (toasterInfo.position) {
      case "top-left":
        return "top-8 left-16";
      case "top-right":
        return "top-8 right-16";
      case "bottom-left":
        return "bottom-8 left-16";
      case "bottom-right":
      default:
        return "bottom-8 right-16";
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      closeToaster();
    }, 5000);

    return () => clearTimeout(timer);
  }, [toasterInfo, closeToaster]);

  return (
    <>
      <div
        className={`space-y-3 fixed z-50 w-64 ${
          toasterInfo.open ? "" : "hidden"
        } ${getPositionClasses()}`}
      >
        <div
          className="max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg"
          role="alert"
        >
          <div className="flex p-4">
            {toasterInfo?.info && (
              <div className="flex-shrink-0">
                <svg
                  className="flex-shrink-0 size-4 text-blue-500 mt-0.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path>
                </svg>
              </div>
            )}
            {toasterInfo?.success && (
              <div className="flex-shrink-0">
                <svg
                  className="flex-shrink-0 size-4 text-teal-500 mt-0.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                </svg>
              </div>
            )}
            {toasterInfo?.error && (
              <div className="flex-shrink-0">
                <svg
                  className="flex-shrink-0 size-4 text-red-500 mt-0.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
                </svg>
              </div>
            )}
            {toasterInfo?.warning && (
              <div className="flex-shrink-0">
                <svg
                  className="flex-shrink-0 size-4 text-yellow-500 mt-0.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                </svg>
              </div>
            )}
            <div className="ms-3">
              <p className="text-sm text-gray-700">{toasterInfo?.message}</p>
            </div>
            <button
              type="button"
              onClick={closeToaster}
              className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              data-dismiss-target="#toast-default"
              aria-label="Close"
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Toaster;
