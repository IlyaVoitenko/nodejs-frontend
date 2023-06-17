import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { verify: false },
  errorMessage: "",
  errorUserStatus: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    initialStateUser: (state, action) => {
      state.user = action.payload;
    },
    userErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
    userErrorStatus: (state, action) => {
      state.errorUserStatus = action.payload;
    },
  },
});

export const { initialStateUser, userErrorMessage, userErrorStatus } =
  usersSlice.actions;

export default usersSlice.reducer;
