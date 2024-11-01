import React from "react";
import { useSelector } from "react-redux";
import { selectArticleData } from "../articledata/articlepagearticledata";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadArticleData } from "../articledata/articlepagearticledata";
import { isLoadingArticleDataState } from "../articledata/articlepagearticledata";
import ArticleZone from "../../components/articleZone/ArticleZone";

export default function ArticlePage() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const articlePermaLink = urlParams.get("articlePermaLink");
    const dispatch = useDispatch();
    const isLoading = useSelector(isLoadingArticleDataState);

    useEffect(() => {
        dispatch(loadArticleData(articlePermaLink));
    }, [dispatch]);

    const articleData = useSelector(selectArticleData);
    
    if (isLoading) {
        return (
            <div style={{width: "100%", height: "700px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <h1>Loading...</h1>
            </div>
        );
    } else  {
        return (
            <div className="fullArticleContainer">
                <div className="fullArticleContent scrollZones">
                    <h1 style={{width: "100%", textAlign: "center"}}>{articleData.title}</h1>
                    {
                        articleData.media_embed ? <ArticleZone/> : ""
                    }
                    {
                        articleData.selfText ? <p>{articleData.selfText}</p> : ""
                    }
                </div>
                <div className="fullArticleComments scrollZones">
                    {
                        articleData.comments ? articleData.comments.map((comment) => {
                            return (
                                <div key={comment.data.id} className="yourFullArticleComment borderedElement">
                                    <p>{comment.data.body}</p>
                                    <p>- {comment.data.author}</p>
                                </div>
                            )
                        }) : ""
                    }
                </div>
            </div>
        );
    }
}
