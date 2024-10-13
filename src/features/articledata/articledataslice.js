import { fetchHomePageData } from "../../app/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadHomeData = createAsyncThunk(
  "homeArticles/loadData",
  async () => {
    const data = await fetchHomePageData();

    const formatedData = [];
    for (const article of data.data.children) {
      const articleObject = {
        id: article.data.id,
        author: article.data.author,
        numComments: article.data.num_comments,
        content: article.data.selftext,
        created: article.data.created,
        previewImage: article.data.preview?.images[0].source.url,
        score: article.data.score,
        title: article.data.title
      }

      formatedData.push(articleObject);
    }

    return formatedData;
  }
);

export const sliceOptions = {
  name: "homeArticles",
  initialState: {
    articles: [],
    isLoading: false,
    hasError: false
  },
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
