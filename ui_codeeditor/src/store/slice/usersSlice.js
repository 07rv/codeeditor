import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    value: [],
  },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
    removeUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload);
    },
    removeAll: (state) => {
      state.value = [];
    },
  },
});

export const { addUser, removeUser, removeAll } = usersSlice.actions;

export default usersSlice.reducer;
