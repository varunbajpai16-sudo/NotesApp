import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
};

const toggleslice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    settggle: (state) => {
      state.toggle = !state.toggle;
    },
  },
});

export const { settggle } = toggleslice.actions;
export default toggleslice.reducer;
