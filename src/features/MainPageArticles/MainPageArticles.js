import React from "react";
import Article from "../../components/article/Article";
import { useSelector } from "react-redux";
import { selectArticlesData } from "../articledata/articledataslice";

export default function MainPageArticle() {
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