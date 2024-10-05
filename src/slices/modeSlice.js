import { createSlice } from "@reduxjs/toolkit";

const themeInLocalStorage = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : "dark";

const initialState = {
  updateClassList: document.documentElement.classList.add(themeInLocalStorage),
  theme: themeInLocalStorage,
};

const modeSlice = createSlice({
  name: "mode",
  initialState: initialState,
  reducers: {
    setMode: (state, action) => {
      if (action.payload === "dark") {
        localStorage.setItem("theme", "dark");
        document.documentElement.classList.replace("light", "dark");
      } else if (action.payload === "light") {
        localStorage.setItem("theme", "light");
        document.documentElement.classList.replace("dark", "light");
      }
      return { theme: action.payload };
    },
  },
});

export const { setMode } = modeSlice.actions;
export default modeSlice.reducer;
