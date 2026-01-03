import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import Sidebar from "./components/Sidebar";
import Notes from "./components/Notes";
import { Outlet } from "react-router-dom";
function App() {
  const settoggle = useSelector((state) => state.toggle.toggle);

  return (
    <div
      className={`${
        settoggle ? "bg-gray-950" : "bg-white"
      } p-2 h-[1080px] overflow-hidden`}
    >
      <Navbar />
      <div className="flex">
        <div className="w-[15%]">
          <Sidebar />
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
