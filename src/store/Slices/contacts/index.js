import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listContacts: [],
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setContactsList: (state, action) =>
      void { ...state, listContacts: [...action.payload] },
  },
});

export const { setContactsList } = contactSlice.actions;

export default contactSlice.reducer;
