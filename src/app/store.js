import { configureStore } from "@reduxjs/toolkit";
import homeArticlesReducer from "../features/articledata/mainpagearticlesdataslice";
import articleReducer from "../features/articledata/articlepagearticledata";
import { searchTermReducer } from "../components/searchbar/searchBarSlice";

export default configureStore({
    reducer: {
        homeArticles: homeArticlesReducer,
        article: articleReducer,
        searchTerm: searchTermReducer
    }
});