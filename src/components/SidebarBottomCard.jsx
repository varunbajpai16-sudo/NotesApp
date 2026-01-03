import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteitem } from "../fetures/notesslice";
import { Link } from "react-router-dom";
import { setActiveEdit } from "../fetures/notesslice";
function SidebarBottomCard() {
  const colors = [
    "bg-yellow-400",
    "bg-blue-400",
    "bg-green-400",
    "bg-red-400",
    "bg-purple-400",
    "bg-pink-400",
    "bg-indigo-400",
  ];

  const getColorFromId = (id) => {
    let hash = 0;
    for (let i = 0; i < id.length; i++) {
      hash = id.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

function Handeledit(id){
    dispatch(setActiveEdit({ id }));
}
  const notes = useSelector((state) => state.note.notes);
  const togglestate = useSelector((state) => state.toggle.toggle);
  const dispatch=useDispatch();
  function HandelItemDelete(id){
      dispatch(deleteitem(id))
  }
  return (
    <div className="mt-5">
      <span className="text-gray-400 font-bold">All Notes</span>

      {notes.length === 0 && (
        <p className="text-sm text-gray-400 mt-2">No notes yet</p>
      )}

      {notes.map((note, index) => (
        <div key={index}>
          {index !== 0 && (
            <div className="w-full h-[1px] rounded bg-gray-300 mt-2"></div>
          )}

          <div className="flex items-center justify-between w-[98%] px-3 py-2 mt-3">
            <div className="flex items-start gap-2">
              <span
                className={`w-1 h-6 rounded ${getColorFromId(note.id)}`}
              ></span>

              <div className="leading-tight">
                <p
                  className={`text-sm font-medium ${
                    togglestate ? "text-white" : "text-black"
                  }`}
                >
                  {note.title || "Untitled"}
                </p>

                <p
                  className={`text-xs truncate max-w-[180px] ${
                    togglestate ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {note.content}
                </p>
              </div>
            </div>
          </div>
          <div className="m-3 flex gap-10 justify-center items-center ">
            <Link to="/Edit" onClick={()=>Handeledit(note.id)}> <button className="text-white p-2 bg-gray-950 rounded h-9 text-center hover:bg-blue-600 hover:cursor-pointer">Edit</button></Link>
              <button onClick={()=>HandelItemDelete(note.id)} className="text-white p-2 bg-gray-950 rounded h-9 text-center  hover:bg-blue-600 hover:cursor-pointer">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SidebarBottomCard;
