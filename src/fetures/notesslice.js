import { createSlice, nanoid } from "@reduxjs/toolkit";

// load from localStorage
const loadNotes = () => {
  const data = localStorage.getItem("notes");
  return data ? JSON.parse(data) : [];
};

const initialState = {
  notes: loadNotes(),
};

const notesSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    addnotes: (state, action) => {
      const AddedNote = {
        id: nanoid(),
        title: action.payload.title,
        content: action.payload.content,
        pined: action.payload.pined === true,
        iseditable:action.payload.edit===true
      };

      state.notes.push(AddedNote);
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },

addedit: (state, action) => {
  const { id, title, content } = action.payload;

  const note = state.notes.find(note => note.id === id);

  if (note) {
    note.title = title;
    note.content = content;
  }

  localStorage.setItem("notes", JSON.stringify(state.notes));
},
setActiveEdit: (state, action) => {
  // disable all notes first
  state.notes.forEach(note => {
    note.iseditable = false;
  });

  // enable the selected note
  const note = state.notes.find(note => note.id === action.payload.id);
  if (note) {
    note.iseditable = true;
  }

  localStorage.setItem("notes", JSON.stringify(state.notes));
},

    deletenotes: (state) => {
      state.notes = [];
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
    deleteitem:(state,action)=>{
     state.notes = state.notes.filter((note)=>note.id!==action.payload)
      localStorage.setItem("notes", JSON.stringify(state.notes));
    }
  },
});

export const { addnotes, deletenotes, Handelpined,deleteitem ,addedit,setActiveEdit} = notesSlice.actions;
export default notesSlice.reducer;
