import { configureStore } from "@reduxjs/toolkit";
import homeArticlesReducer from "../features/articledata/mainpagearticlesdataslice";
import articleReducer from "../features/articledata/articlepagearticledata";

export default configureStore({
    reducer: {
        homeArticles: homeArticlesReducer,
        article: articleReducer
    }
});;