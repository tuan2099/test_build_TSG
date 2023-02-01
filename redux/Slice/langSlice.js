import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export const langSlice = createSlice({
  name: "lang",
  initialState: {
    currentLang: "vi",
  },
  reducers: {
    setLang: (state, action) => {
      state.currentLang = action.payload;
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.lang,
      };
    },
  },
});

export const langSelector = (state) => state.lang.currentLang;
