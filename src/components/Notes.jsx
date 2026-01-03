import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addnotes, Handelpined } from "../fetures/notesslice";

function Notes() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const dark = useSelector((state) => state.toggle.toggle);
  const [title, settitle] = useState("");
  const [Content, setContent] = useState("");
  const notes = useSelector((state) => state.note.notes);
  function HandelSubmit(e) {
    e.preventDefault();
    dispatch(addnotes({ title, content: Content }));
    settitle("");
    setContent("");
    setOpen(false);
  }

  const getColorFromId = (id) => {
    let hash = 0;
    for (let i = 0; i < id.length; i++) {
      hash = id.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

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
          <span className="text-gray-400">Saved ✓</span>

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
                  onClick={HandelSubmit}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-600"
                >
                  Save ✓
                </li>

                {/* Save and Pin */}
                <li
                  onClick={() => {
                    dispatch(
                      addnotes({ title, content: Content, pined: true })
                    );
                    settitle("");
                    setContent("");
                    setOpen(false);
                  }}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-600"
                >
                  Save & Pin 📌
                </li>
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

export default Notes;
