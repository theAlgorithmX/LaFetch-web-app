"use client";
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    profile: null,
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.profile = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.profile = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
