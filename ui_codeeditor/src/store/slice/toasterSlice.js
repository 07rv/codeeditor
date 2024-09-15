import { createSlice } from "@reduxjs/toolkit";

export const toasterSlice = createSlice({
  name: "toaster",
  initialState: {
    value: {
      message: "",
      error: false,
      warning: false,
      info: false,
      success: false,
      open: false,
    },
  },
  reducers: {
    setToaster: (state, action) => {
      state.value = action.payload;
    },
    setToasterMessage: (state, action) => {
      state.value.message = action.payload;
    },
    setToasterError: (state, action) => {
      state.value.error = action.payload;
    },
    setToasterWarning: (state, action) => {
      state.value.warning = action.payload;
    },
    setToasterInfo: (state, action) => {
      state.value.info = action.payload;
    },
    setToasterSuccess: (state, action) => {
      state.value.success = action.payload;
    },
    setToasterOpen: (state, action) => {
      state.value.open = action.payload;
    },
  },
});

export const {
  setToaster,
  setToasterMessage,
  setToasterError,
  setToasterWarning,
  setToasterInfo,
  setToasterSuccess,
  setToasterOpen,
} = toasterSlice.actions;

export default toasterSlice.reducer;
