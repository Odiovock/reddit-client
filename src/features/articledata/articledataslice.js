import { fetchHomePageData } from "../../app/api";
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const loadHomeData = createAsyncThunk(
    "homeArticles/loadData",
    async () => {
        const data = fetchHomePageData();
        const json = data.json();
        return json;
    }
);

export const allRecipesSlice = createSlice({
    name: 'homeArticles',
    initialState: {
      articles: [],
      isLoading: false,
      hasError: false,
    },
    reducers: {}, 
    extraReducers: {
        [loadData.pending]: (state, action) => { 
          state.isLoading = true;
          state.hasError = false;
        },
        [loadData.fulfilled]: (state, action) => {
          state.isLoading = false;
          state.hasError = false;
        },
        [loadData.rejected]: (state, action) => {
          state.isLoading = false;
          state.hasError = true;
        },
      },
  });
  
  export default allRecipesSlice.reducer;