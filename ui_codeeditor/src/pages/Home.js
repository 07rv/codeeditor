const Home = () => {
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
            Do code with others effortlesly
          </p>
        </div>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-gray-500"
          />
          <input
            type="text"
            placeholder="Room Id"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-gray-500"
          />
        </div>
        <div className="text-center mt-6">
          <button className="w-full py-2 text-xl text-white bg-gray-400 rounded-lg hover:bg-gray-500 transition-all">
            Join
          </button>
          <p
            id="helper-text-explanation"
            className="mt-2 text-sm text-gray-500 dark:text-gray-400"
          >
            Well never share your details. Read our{" "}
            <a
              href="#"
              clasName="font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Privacy Policy
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
