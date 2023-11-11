import { RootState } from "@/store/store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type ThemeStateOptions = "dark" | "light";

export interface ThemeState {
  value: ThemeStateOptions;
}

let initialThemeValue: ThemeStateOptions = "light";

const initialState: ThemeState = {
  value: initialThemeValue,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.value = state.value == "light" ? "dark" : "light";
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleTheme } = themeSlice.actions;
export const getTheme = (state: RootState) => state.theme.value;
// export const theme = (state: RootState) => state.theme.value;

export default themeSlice.reducer;
