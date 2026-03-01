import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { settggle } from "../fetures/toggleslice";
function Navbar() {

const dispatch=useDispatch()
const togglestate=useSelector((state)=>state.toggle.toggle)
function Handelclick(){
  dispatch(settggle())
}

  return (
   <nav
  className={`m-0 w-full ${
    togglestate ? "bg-gray-800" : "bg-white"
  } shadow-sm px-6 py-3 flex items-center justify-between`}
>

      
      {/* LEFT SECTION */}
      <div className="flex items-center gap-4">

     <div className={togglestate ? "text-white" : "text-black"}>
  <span className="font-bold text-2xl ">VNotes</span>
</div>

      </div>
{/* <div className="flex items-center gap-2">
  <form className="relative"> */}
    {/* Search Icon */}
    {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
        />
      </svg>
    

    Input 
<input
  className={`min-w-[400px] rounded p-1.5 pl-10 focus:outline-none ${
    togglestate
      ? "bg-gray-900 text-white border-gray-700"
      : "bg-gray-200 text-gray-600 border-gray-300"
  }`}
  type="text"
  placeholder="Search notes..."
/> 

  </form>
</div> */}


   {/* RIGHT SECTION */}
<div className="flex items-center gap-4">
<button
  type="button"
  onClick={Handelclick}
  className={`p-2 rounded-full transition ${
    togglestate ? "hover:bg-gray-800" : "hover:bg-gray-200"
  }`}
>
  {togglestate ? (
    <SunIcon className="h-10 w-10 text-yellow-400" />
  ) : (
    <MoonIcon className="h-10 w-10 text-gray-800" />
  )}
</button>

</div>
    </nav>
  );
}
 
const SunIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="1.5"
    className={className}
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);

const MoonIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="1.5"
    className={className}
  >
    <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
  </svg>
);



export default Navbar;
