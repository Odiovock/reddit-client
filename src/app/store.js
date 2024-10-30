import { configureStore } from "@reduxjs/toolkit";
import homeArticlesReducer from "../features/articledata/mainpagearticlesdataslice";
import articleReducer from "../features/articledata/articlepagearticledata";
import { searchTermReducer } from "../components/searchbar/searchBarSlice";
import { fliterReducer } from "../components/filter/filterslice";

export default configureStore({
    reducer: {
        homeArticles: homeArticlesReducer,
        article: articleReducer,
        searchTerm: searchTermReducer,
        filter: fliterReducer
    }
});