import React, { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addedit,setActiveEdit} from "../fetures/notesslice";
function EditPortion() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const notes = useSelector((state) => state.note.notes);
  const editnote = notes.find(note => note.iseditable === true);
  const dark = useSelector((state) => state.toggle.toggle);
  const [title, settitle] = useState("");
  const [Content, setContent] = useState("");
  const togglestate=useSelector((state)=>state.toggle.toggle)

useEffect(() => {
  if (editnote) {
    settitle(editnote.title);
    setContent(editnote.content);
  }
}, [editnote]);

function HandelSubmit(id) {
  dispatch(addedit({ title, content: Content, id }));
  dispatch(setActiveEdit({ id:id })); // disable editing
  setOpen(false);
}
if (!editnote) {
  return (


    <div
      className={`flex-1 m-5 rounded-xl border flex items-center justify-center flex-col gap-5 text-[1.2rem]
        ${dark ? "bg-gray-800 text-gray-400" : "bg-gray-100 text-gray-900"}
      `}
    >
                Select a note to start editing
                <Link to="/">
                  <button           className={`mt-4 w-[98%] rounded ${
            togglestate ? "bg-gray-950 text-white" : "bg-white"
          } p-2  text-blue-600 shadow
    hover:bg-blue-600 hover:text-white hover:shadow-lg  cursor-pointer`}>
                    Home
                  </button>
                </Link>
    </div>
  );
}


  return (
    <div
      className={`flex-1 m-5 rounded-xl border w-[85%] 
          ${
            dark
              ? "bg-gray-800 border-gray-700 text-gray-100"
              : "bg-white border-gray-200 text-gray-900"
          }
        `}
    >
      {/* Header */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        {/* Title */}
        <input
          value={title}
          onChange={(e) => settitle(e.target.value)}
          type="text"
          placeholder="Note title"
          className={`w-full text-2xl font-semibold bg-transparent outline-none
              ${dark ? "placeholder-gray-400" : "placeholder-gray-500"}
            `}
        />

        {/* Meta Row */}
        <div className="mt-2 flex items-center justify-between text-sm">
          <span className="text-gray-400">Editing ✓</span>

          <button onClick={() => setOpen(!open)} className="hover:opacity-70">
            ☰
          </button>
          {/* DROPDOWN */}
          {open && (
            <div
              className={`absolute right-0 mt-2 w-40 ${
                dark ? "bg-gray-500 text-white" : "bg-gray-100 text-black"
              } border rounded shadow-lg`}
            >
              <ul className="text-sm">
                {/* Save only */}
                <li
                  onClick={() => HandelSubmit(editnote.id)}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-600"
                >
                  Save ✓
                </li>

                {/* Save and Pin */}
                <Link to="/">
                  <li className="px-4 py-2 cursor-pointer hover:bg-gray-600">
                    Home
                  </li>
                </Link>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Content Area */}
      <textarea
        value={Content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Start writing your note here..."
        className={`w-full h-[calc(100vh-220px)] resize-none p-6 bg-transparent outline-none text-base leading-relaxed
            ${dark ? "placeholder-gray-500" : "placeholder-gray-400"}
          `}
      />
    </div>
  );
}

export default EditPortion;
