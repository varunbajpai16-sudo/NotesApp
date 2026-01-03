import React, { useLayoutEffect, useState } from "react";
import SidebarTopCard from "./SidebarTopCard";
import SidebarBottomCard from "./SidebarBottomCard";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deletenotes } from "../fetures/notesslice";
function Sidebar() {
  const dispatch = useDispatch();

  const togglestate = useSelector((state) => state.toggle.toggle);
  return (
    <div>
      <div
        className={` ${
          togglestate
            ? "bg-gray-900 border-gray-800"
            : "bg-gray-100 border-gray-300"
        } p-3 border-1 shadow rounded-2xl mt-5`}
      >
        {/* Top section*/}
        <span className="font-bold text-gray-400 ">Pinned Notes</span>
        <SidebarTopCard />

        {/*Bottom section */}
        <SidebarBottomCard />

        {/* New Notes button */}
        <button
          onClick={() => dispatch(deletenotes())}
          className={`mt-4 w-[98%] rounded ${
            togglestate ? "bg-gray-950 text-white" : "bg-white"
          } p-2  text-blue-600 shadow
    hover:bg-blue-600 hover:text-white hover:shadow-lg  cursor-pointer`}
        >
          Delete All
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
