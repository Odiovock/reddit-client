import { configureStore } from "@reduxjs/toolkit";
import homeArticlesReducer from "../features/articledata/articledataslice";

export default configureStore({
    reducer: {
        homeArticles: homeArticlesReducer
    }
});