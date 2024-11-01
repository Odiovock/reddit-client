import React from "react";
import { selectArticleData } from "../../features/articledata/articlepagearticledata";
import { useSelector } from "react-redux";

export default function ArticleZone () {
    const articleData = useSelector(selectArticleData);
    
    if(articleData.isVideo || articleData.media_embed.content) {
        if (articleData.media_embed.content) {
            return <div className="bypassVideoSize" dangerouslySetInnerHTML={{__html: articleData.media_embed.content}}></div>;
        } else {
            return (
                <video style={{width: "100%", maxHeight: "600px"}} controls>
                    <source src={articleData.media.reddit_video.fallback_url} type="video/ogg"></source>
                </video>
            );
        }
    } else if (articleData.preview) {
        return (
            <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                <img className="scalableimg" src={articleData.preview} alt="article image if any"/>
            </div>
        );
    }
}