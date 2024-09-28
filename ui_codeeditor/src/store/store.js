import { configureStore } from "@reduxjs/toolkit";

import toasterSlice from "./slice/toasterSlice";
import usersSlice from "./slice/userSlice";
export default configureStore({
  reducer: {
    toaster: toasterSlice,
    users: usersSlice,
  },
});
