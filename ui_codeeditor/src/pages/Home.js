import { useState } from "react";

import useHandler from "../utlities/NotificationHandler";

const Home = () => {
  const inputHandlerToaster = useHandler();
  const [inputField, setInputField] = useState({
    name: "",
    roomId: "",
  });
  const [errorField, setErrorField] = useState({
    name: "",
    roomId: "",
  });

  const inputHandler = (name, value) => {
    inputHandlerToaster({
      open: true,
      message: "wsdfrtgy",
      success: true,
    });
    setInputField((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (errorField[name]) {
      setErrorField((prevState) => ({
        ...prevState,
        [name]: "",
      }));
    }
  };

  const setErrorMessage = (name, message) => {
    setErrorField((prevState) => ({
      ...prevState,
      [name]: message,
    }));
  };

  const checkAndSetValidationsErrors = () => {
    let hasError = false;
    const validations = {
      name: "Please enter name",
      roomId: "Please enter roomId",
    };

    Object.keys(inputField).forEach((field) => {
      if (!inputField[field]) {
        setErrorMessage(field, validations[field]);
        hasError = true;
      }
    });

    return hasError;
  };

  const submitButton = async () => {
    if (!checkAndSetValidationsErrors()) {
    }
  };

  return (
    <div className="min-h-screen bg-blue-400 flex justify-center items-center">
      <div className="absolute w-60 h-60 rounded-xl bg-gray-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div>
      <div className="absolute w-48 h-48 rounded-xl bg-gray-300 -bottom-6 -right-10 transform rotate-12 hidden md:block"></div>
      <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
        <div>
          <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
            Code with me!
          </h1>
          <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
            Do code with others effortlessly
          </p>
        </div>
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-gray-500"
            value={inputField.name}
            onChange={(e) => inputHandler(e.target.name, e.target.value)}
          />
          {errorField.name && (
            <div className="text-red-600">
              <small>{errorField.name}</small>
            </div>
          )}
          <input
            type="text"
            name="roomId"
            id="roomId"
            placeholder="Room Id"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-gray-500"
            value={inputField.roomId}
            onChange={(e) => inputHandler(e.target.name, e.target.value)}
          />
          {errorField.roomId && (
            <div className="mt-1 text-red-600">
              <small>{errorField.roomId}</small>
            </div>
          )}
        </div>
        <div className="text-center mt-6">
          <button
            onClick={submitButton}
            className="w-full py-2 text-xl text-white bg-blue-400 rounded-lg hover:bg-blue-500 transition-all"
          >
            Join
          </button>
          <p
            id="helper-text-explanation"
            className="mt-2 text-sm text-gray-500 dark:text-gray-400"
          >
            Don't have a room id, Create one{" "}
            <a
              href="/"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              room Id
            </a>
            .
          </p>
        </div>
      </div>
      <div className="w-40 h-40 absolute bg-gray-300 rounded-full top-0 right-12 hidden md:block"></div>
      <div className="w-20 h-40 absolute bg-gray-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div>
    </div>
  );
};

export default Home;
