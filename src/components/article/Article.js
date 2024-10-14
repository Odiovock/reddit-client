import React from "react";
import { useNavigate } from "react-router-dom";

export default function Article ({article}) {
    const navigate = useNavigate();

    function handleOnClick (event) {
        navigate(`/articles/?articlePermaLink=${article.permalink}`);
    }
    
    return (
        <div className="mainPageArticleWrapper">
            <div className="mainPageArticle borderedElement">
                <div className="mainPageArticleButtonZone">
                    <button className="opinionButton">Upvote</button>
                    <p>{article.score}</p>
                    <button className="opinionButton">Downvote</button>
                </div>
                <div className="mainPageArticleTextZone" onClick={handleOnClick}>
                    <h2>{article.title}</h2>
                    {
                        article.previewImage ? <img src={article.previewImage} alt="Article image if any"/> : ""
                    }
                    {
                        article.content ? <p className="scrollZones" style={{maxHeight: "300px"}}>{article.content}</p> : ""
                    }
                </div>
            </div>
        </div>
    );
}