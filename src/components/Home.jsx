import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Home() {
  const dark = useSelector((state) => state.toggle.toggle);
  return (
    <div
      className={`mt-50 flex h-full w-full items-center justify-center
         "bg-white text-gray-900" `}
    >
      <div className="flex flex-col items-center text-center gap-4 max-w-md">
        {/* Illustration */}
        <img src="../logo.png" alt="Welcome" className="object-contain rounded-2xl" />

        {/* Title */}
        <h1 className={`text-2xl font-semibold ${dark?"text-white":"text-black"}`}>Welcome to VNotes</h1>

        {/* Subtitle */}
        <p className={`${dark?"text-white":"text-black"}`}>
          Take and organize your notes easily.
        </p>

        {/* Button */}
        <Link to="/Notes">
          <button
            className="mt-4 rounded-md bg-blue-600 px-6 py-2 text-white font-medium
                     hover:bg-blue-700 hover:shadow-lg hover:scale-105
                     transition-all duration-300
                     hover:cursor-pointer
                     "
          >
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
