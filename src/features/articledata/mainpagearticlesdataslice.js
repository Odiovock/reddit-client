import { fetchHomePageData, fetchSearchData } from "../../app/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadHomeData = createAsyncThunk(
  "homeArticles/loadData",
  async (searchParam) => {
    const data = await fetchHomePageData();
    
    const formatedData = [];
    for (const article of data.data.children) {
      const articleObject = {
        id: article.data.id,
        content: article.data.selftext,
        created: article.data.created,
        permalink: article.data.permalink,
        previewImage: article.data.preview?.images[0].source.url,
        score: article.data.score,
        title: article.data.title,
      }

      formatedData.push(articleObject);
    }

    return formatedData;
  }
);

export const loadSearchData = createAsyncThunk(
  "homeArticles/loadSearchData",
  async (searchParam) => {
    const data = await fetchSearchData(searchParam);
    
    const formatedData = [];
    for (const article of data.data.children) {
      const articleObject = {
        id: article.data.id,
        content: article.data.selftext,
        created: article.data.created,
        permalink: article.data.permalink,
        previewImage: article.data.preview?.images[0].source.url,
        score: article.data.score,
        title: article.data.title,
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
      })
      .addCase(loadSearchData.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(loadSearchData.fulfilled, (state, action) => {
        state.articles = action.payload;
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(loadSearchData.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
};

export const mainPageArticlesDataSlice = createSlice(sliceOptions);

export const selectArticlesData = (state) => state.homeArticles.articles;
export const isLoadingState = (state) => state.homeArticles.isLoading;
 
export default mainPageArticlesDataSlice.reducer;
