import React from "react";
import Article from "../../components/article/Article";
import { useSelector } from "react-redux";
import { selectArticlesData } from "../articledata/mainpagearticlesdataslice";
import { useEffect } from "react";
import { loadHomeData } from "../articledata/mainpagearticlesdataslice";
import { useDispatch } from "react-redux";

export default function MainPageArticle() {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(loadHomeData());
    }, [dispatch]);

    const allArticles = useSelector(selectArticlesData);
    
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