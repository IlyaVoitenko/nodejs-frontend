import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrayContacts: [],
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    initialArrayContacts: (state, action) =>
      void (state.arrayContacts = [...action.payload]),
  },
});

export const { initialArrayContacts } = contactSlice.actions;

export default contactSlice.reducer;
