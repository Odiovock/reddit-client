import React from "react";
import Article from "../../components/article/Article";
import { useSelector } from "react-redux";
import { selectArticlesData, isLoadingState, isLoadingSearchState, setIsLoadingSearch } from "../articledata/mainpagearticlesdataslice";
import { useEffect } from "react";
import { loadHomeData } from "../articledata/mainpagearticlesdataslice";
import { useDispatch } from "react-redux";

export default function MainPageArticle() {
    const dispatch = useDispatch();
    const isLoading = useSelector(isLoadingState);
    const isLoadingSearch = useSelector(isLoadingSearchState);

    useEffect(() => {
      if (isLoadingSearch) {
        dispatch(setIsLoadingSearch(false));
      } else {
        dispatch(loadHomeData());
      }
    }, [dispatch]);

    const allArticles = useSelector(selectArticlesData);

    if(isLoading) {
        return (
            <div style={{width: "100%", height: "700px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <h1>Loading...</h1>
            </div>
        );
    } else {
        return (
            <div className="mainPageArticlesContainer scrollZones" style={{margin: "auto"}}>
                {allArticles.map((article) => {
                    return(
                            <Article key={article.id} article={article}/>
                    )
                })}
            </div>
        );
    }
}