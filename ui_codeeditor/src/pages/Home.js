import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useHandler from "../utlities/NotificationHandler";

import { useNavigate } from "react-router-dom";

import ProfileListHandler from "../utlities/ProfileListHandler";

const Home = () => {
  const navigate = useNavigate();
  const inputHandlerToaster = useHandler();
  const { addUserHandler, removeAllUserHandler } = ProfileListHandler();
  const [inputField, setInputField] = useState({
    name: "",
    roomId: "",
  });

  const inputHandler = (name, value) => {
    setInputField((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const checkAndSetValidationsErrors = () => {
    let hasError = false;
    const validations = {
      name: "Please enter name",
      roomId: "Please enter room Id",
    };

    Object.keys(inputField).forEach((field) => {
      if (!inputField[field]) {
        inputHandlerToaster({
          open: true,
          message: validations[field],
          error: true,
        });
        hasError = true;
      }
    });
    return hasError;
  };

  const submitButton = async () => {
    if (!checkAndSetValidationsErrors()) {
      removeAllUserHandler();
      addUserHandler({
        id: inputField.roomId,
        name: inputField.name,
      });
      navigate(`/editor/${inputField.roomId}`, {
        state: {
          name: inputField.name,
        },
      });
    }
  };

  const handleInputEnter = (e) => {
    if (e.code === "Enter") {
      submitButton();
    }
  };

  const createRoom = () => {
    const roomId = uuidv4();
    inputHandler("roomId", roomId);
    inputHandlerToaster({
      open: true,
      message: "Created a new room",
      success: true,
      position: "top-right",
    });
  };

  return (
    <div className="min-h-screen bg-blue-400 flex justify-center items-center relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute w-60 h-60 rounded-xl bg-gray-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div>
      <div className="absolute w-48 h-48 rounded-xl bg-gray-300 -bottom-6 -right-10 transform rotate-12 hidden md:block"></div>

      {/* Main Card */}
      <div className="py-12 px-6 md:px-12 bg-white rounded-2xl shadow-xl z-20 max-w-md w-full">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4 cursor-pointer">
            Code with me!
          </h1>
          <p className="text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
            Team up and code without complications.
          </p>
        </div>

        {/* Input Fields */}
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="block text-sm py-3 px-4 rounded-lg w-full border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            value={inputField.name}
            onChange={(e) => inputHandler(e.target.name, e.target.value)}
            onKeyUp={handleInputEnter}
          />
          <input
            type="text"
            name="roomId"
            id="roomId"
            placeholder="Room ID"
            className="block text-sm py-3 px-4 rounded-lg w-full border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            value={inputField.roomId}
            onChange={(e) => inputHandler(e.target.name, e.target.value)}
            onKeyUp={handleInputEnter}
          />
        </div>

        {/* Submit Button */}
        <div className="text-center mt-6">
          <button
            onClick={submitButton}
            className="w-full py-3 text-lg text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-all focus:ring-2 focus:ring-blue-300 focus:outline-none"
          >
            Join
          </button>
          <p className="mt-4 text-sm text-gray-500">
            Don’t have a room ID? Create one{" "}
            <button
              onClick={createRoom}
              className="font-medium text-blue-600 hover:underline"
            >
              room id
            </button>
            .
          </p>
        </div>
      </div>

      {/* More Decorative Elements */}
      <div className="absolute w-40 h-40 bg-gray-300 rounded-full top-0 right-12 hidden md:block"></div>
      <div className="absolute w-20 h-40 bg-gray-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div>
    </div>
  );
};

export default Home;
