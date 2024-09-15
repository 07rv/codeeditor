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
        position: "bottom-right",
      },
    ],
  },
  reducers: {
    setToaster: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setToaster } = toasterSlice.actions;

export default toasterSlice.reducer;
