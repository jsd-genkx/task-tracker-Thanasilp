import React from "react";

const Header = () => {
  return (
    <div>
      <div className="flex justify-center items-center text-6xl text-center bg-gray-800 py-4 w-[100]] text-white font-extrabold mx-auto">
        <img
          src="/src/assets/pepe(1).gif"
          alt=""
          className="h-14 w-14 mr-4 rounded-full"
        />
        Task Tracker
        <img
          src="/src/assets/pepe(1).gif"
          alt=""
          className="h-14 w-14 ml-4 rounded-full scale-x-[-1]"
        />
      </div>
    </div>
  );
};

export default Header;
