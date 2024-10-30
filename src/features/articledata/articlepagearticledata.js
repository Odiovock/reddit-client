import { fetchArticleData } from "../../app/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadArticleData = createAsyncThunk(
    "article/loadData",
    async (articleIdentity) => {
        const data = await fetchArticleData(articleIdentity);
        const formatedArticleData = {
          title: data[0].data.children[0].data.title,
          score: data[0].data.children[0].data.score,
          media: data[0].data.children[0].data.media,
          media_embed: data[0].data.children[0].data.media_embed,
          preview: data[0].data.children[0].data.preview.images[0].source.url,
          isVideo: data[0].data.children[0].data.is_video,
          comments: data[1].data.children,
          selfText: data[0].data.children[0].data.selftext
        };
        return formatedArticleData;
    }
);

export const sliceOptions = {
    name: "article",
    initialState: {
      data: [],
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
          state.data = action.payload;
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
export const isLoadingArticleDataState = (state) => state.article.isLoading;

export default articlePageArticleDataSlice.reducer;