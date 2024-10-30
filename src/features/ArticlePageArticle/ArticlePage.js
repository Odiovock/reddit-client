import React from "react";
import Lama from "../../ressources/images/1002997-Lama.jpg";
import { useSelector } from "react-redux";
import { selectArticleData } from "../articledata/articlepagearticledata";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadArticleData } from "../articledata/articlepagearticledata";
import { isLoadingArticleDataState } from "../articledata/articlepagearticledata";

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
                        articleData.isVideo ? 
                            articleData.media.reddit_video ? 
                                <video style={{width: "100%", maxHeight: "600px"}} controls>
                                    <source src={articleData.media.reddit_video.fallback_url} type="video/ogg"></source>
                                </video> :  
                                <p>Video not found.</p> :
                           articleData.media_embed ? 
                                <div className="bypassVideoSize" dangerouslySetInnerHTML={{__html: articleData.media_embed.content}}></div> :
                                articleData.preview ? 
                                <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                                    <img className="scalableimg" src={articleData.preview} alt="article image if any"/>
                                    <p></p>
                                </div> : 
                                ""
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
