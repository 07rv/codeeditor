import { configureStore } from "@reduxjs/toolkit";

import toasterSlice from "./slice/toasterSlice";
export default configureStore({
  reducer: {
    toaster: toasterSlice,
  },
});
