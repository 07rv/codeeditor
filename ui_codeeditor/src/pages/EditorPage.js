const EditorPage = () => {
  return (
    <>
      <div className="xl:rounded-r transform  xl:translate-x-0  ease-in-out transition duration-500 flex justify-start items-start h-full  w-full sm:w-64 bg-gray-900 flex-col">
        <div className="hidden xl:flex justify-start p-6 items-center space-x-3">
          <p className="text-2xl leading-6 text-white">OvonRueden</p>
        </div>
        <div className="mt-6 flex flex-col justify-start items-center  pl-4 w-full border-gray-600 border-b space-y-3 pb-5 ">
          <button className="flex jusitfy-start items-center space-x-6 w-full  focus:outline-none  focus:text-indigo-400  text-white rounded ">
            <p className="text-base leading-4 ">Connected</p>
          </button>
        </div>
        <div className="flex flex-col justify-start items-center   px-6 border-b border-gray-600 w-full  ">
          <button className="focus:outline-none focus:text-indigo-400 text-left  text-white flex justify-between items-center w-full py-5 space-x-14  ">
            <p className="text-sm leading-5  uppercase">User</p>
            <svg
              id="icon1"
              className="transform"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 15L12 9L6 15"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div className="flex justify-start flex-col w-full md:w-auto items-start pb-5 ">
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <button
                  key={index}
                  className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52"
                >
                  <svg
                    className="fill-stroke"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 10L11 14L17 20L21 4L3 11L7 13L9 19L12 15"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-base leading-4  ">Messages</p>
                </button>
              ))}
          </div>
        </div>

        <div className="flex flex-col justify-between items-center h-full pb-6   px-6  w-full  space-y-32 ">
          <div className="flex flex-col justify-start items-center px-6 border-b border-gray-600 w-full">
            <div className="flex justify-start flex-col w-full md:w-auto items-start pb-5 ">
              <button className="flex justify-start mt-5 items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
                <p className="text-base leading-4  ">Copy Room Id</p>
              </button>
              <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
                <p className="text-base leading-4  ">Leave</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditorPage;
