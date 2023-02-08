import { getSearchSuggestionsData } from "@/service/modules/home";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import type { ISearchSuggest } from "@/service/modules/home";

interface IinitialState {
  navbar: ISearchSuggest;
}

const initialState: IinitialState = {
  navbar: {
    id: 0,
    defaultKey: "",
    configKey: [],
  },
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(HYDRATE, (state, action: any) => {
        return {
          ...state,
          ...action.payload.home,
        };
      })
      .addCase(fetchSearchSuggestionAction.fulfilled, (state, { payload }) => {
        state.navbar = payload;
      });
  },
});

export const fetchSearchSuggestionAction = createAsyncThunk(
  "fetchSearchSuggestionAction",
  async () => {
    const res = await getSearchSuggestionsData();
    return res.data;
  }
);

// export const {  } = homeSlice.actions;
export default homeSlice.reducer;
