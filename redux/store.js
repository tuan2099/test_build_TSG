import { configureStore } from "@reduxjs/toolkit";
import { langSlice } from "./Slice/langSlice";
const store = configureStore({
  reducer: {
    lang: langSlice.reducer,
  },
});

export default store;
