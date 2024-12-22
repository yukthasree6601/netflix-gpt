import React from "react";
import Header from "./Header";

const Browse = () => {
  return (
    <div className=" text-white w-screen bg-gradient-to-b flex justify-between absolute z-10">
      <Header />

      <div className="flex justify-between items-center px-8 py-4"></div>
      <div className="flex items-center space-x-4">
        <img
          alt="user-logo"
          src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
          className="w-12 h-12 rounded-full"
        />
      </div>
      <button className="text-sm font-medium text-gray-400 hover:text-red-600">
        Sign Out
      </button>
    </div>
  );
};

export default Browse;
