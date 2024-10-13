import React from "react";
import Lama from "../../ressources/images/1002997-Lama.jpg"

export default function Article ({article}) {
    console.log(article)
    return (
        <div className="mainPageArticle borderedElement">
            <div className="mainPageArticleTextZone">
                <h2>{article.title}</h2>
                <div className="mainPageArticleButtonZone">
                    <button className="opinionButton">Upvote</button>
                    <p>{article.score}</p>
                    <button className="opinionButton">Downvote</button>
                </div>
                {
                    article.content ? <p className="scrollZones" style={{maxHeight: "300px"}}>{article.content}</p> : ""
                }
            </div>
            <img src={article.previewImage} alt="it's a lama" style={{margin: "auto", width: "40%", height: "auto"}}/>
        </div>
    );
}