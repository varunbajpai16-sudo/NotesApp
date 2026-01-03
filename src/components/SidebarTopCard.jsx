import React from "react";
import { useSelector } from "react-redux";

function SidebarTopCard() {
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

  const Togglestate = useSelector((state) => state.toggle.toggle);
  const notes = useSelector((state) => state.note.notes);

  // ✅ ONLY PINNED NOTES
  const pinnedNotes = notes.filter((note) => note.pined);

  return (
    <>
      {pinnedNotes.map((note) => (
        <div
          key={note.id}
          className={`flex items-center justify-between w-[98%] px-3 py-2 mt-3 rounded-md border 
          ${
            Togglestate
              ? "bg-gray-800 border-gray-700"
              : "bg-blue-50 border-blue-200"
          }`}
        >
          {/* LEFT */}
          <div className="flex items-start gap-2">
            <span
              className={`w-1 h-6 rounded ${getColorFromId(note.id)}`}
            ></span>

            <div className="leading-tight">
              <p
                className={`text-sm font-medium ${
                  Togglestate ? "text-white" : "text-gray-900"
                }`}
              >
                {note.title || "Untitled"}
              </p>

              <p
                className={`text-xs ${
                  Togglestate ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {note.content.slice(0, 30)}...
              </p>
            </div>
          </div>

          {/* PIN ICON */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="w-6 h-6 text-yellow-500 rotate-12 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 3l5 5-4 4v4l-4 4-4-4h4l4-4h-4l-5-5 4-4z"
            />
          </svg>
        </div>
      ))}

      {/* Optional Empty State */}
      {pinnedNotes.length === 0 && (
        <p className="text-xs text-gray-400 mt-4 px-3">No pinned notes 📌</p>
      )}
    </>
  );
}

export default SidebarTopCard;
