import { fetchHomePageData, fetchSearchData, fetchFilteredData } from "../../app/api";
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

export const loadFilteredData = createAsyncThunk(
  "homeArticles/loadFilteredData",
  async (filter) => {
    const data = await fetchFilteredData(filter);

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
)


export const sliceOptions = {
  name: "homeArticles",
  initialState: {
    articles: [],
    isLoading: false,
    isLoadingSearch: false,
    isLoadingFilter: false,
    hasError: false
  },
  reducers: {
    setIsLoadingSearch: (state, action) => {
      state.isLoadingSearch = action.payload;
    },
    setIsLoadingFilter: (state, action) => {
      state.isLoadingFilter = action.payload;
    }
  },
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
      })
      .addCase(loadFilteredData.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(loadFilteredData.fulfilled, (state, action) => {
        state.articles = action.payload;
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(loadFilteredData.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
};

export const mainPageArticlesDataSlice = createSlice(sliceOptions);

export const { setIsLoadingSearch, setIsLoadingFilter } = mainPageArticlesDataSlice.actions;

export const selectArticlesData = (state) => state.homeArticles.articles;
export const isLoadingState = (state) => state.homeArticles.isLoading;
export const isLoadingSearchState = (state) => state.homeArticles.isLoadingSearch;
export const isLoadingFilterState = (state) => state.homeArticles.isLoadingFilter;
 
export default mainPageArticlesDataSlice.reducer;
