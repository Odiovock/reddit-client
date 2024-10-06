import { fetchHomePageData } from "../../app/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadHomeData = createAsyncThunk(
  "homeArticles/loadData", 
  async () => {
    const data = await fetchHomePageData();
    console.log(data);
    return data;
  }
);

const initialState = {
  articles: [],
  isLoading: false,
  hasError: false,
};

export const sliceOptions = {
  name: "homeArticles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadHomeData.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(loadHomeData.fulfilled, (state, action) => {
        state.articles = action.payload;
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(loadHomeData.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
};

export const articlesDataSlice = createSlice(sliceOptions);

export const selectArticlesData = (state) => state.homeArticles.articles;

export default articlesDataSlice.reducer;
