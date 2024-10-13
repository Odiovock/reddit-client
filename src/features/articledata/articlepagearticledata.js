import { fetchArticleData } from "../../app/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadArticleData = createAsyncThunk(
    "article/loadData",
    async (articleIdentity) => {
        const data = await fetchArticleData(articleIdentity);

        const formatedArticleData = data;

        return formatedArticleData;
    }
);

export const sliceOptions = {
    name: "article",
    initialState: {
      data: {},
      isLoading: false,
      hasError: false
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(loadArticleData.pending, (state) => {
          state.isLoading = true;
          state.hasError = false;
        })
        .addCase(loadArticleData.fulfilled, (state, action) => {
          state.articles = action.payload;
          state.isLoading = false;
          state.hasError = false;
        })
        .addCase(loadArticleData.rejected, (state, action) => {
          state.isLoading = false;
          state.hasError = true;
        });
    },
};


export const articlePageArticleDataSlice = createSlice(sliceOptions);

export const selectArticleData = (state) => state.article.data;

export default articlePageArticleDataSlice.reducer;