import { createSlice } from "@reduxjs/toolkit";

export const toasterSlice = createSlice({
  name: "toaster",
  initialState: {
    value: [
      {
        message: "",
        error: false,
        warning: false,
        info: false,
        success: false,
        open: false,
      },
    ],
  },
  reducers: {
    setToaster: (state, action) => {
      state.value = action.payload;
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
