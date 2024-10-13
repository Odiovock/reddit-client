import React from "react";

export default function Article ({article}) {
    console.log(article)
    return (
        <div className="mainPageArticle borderedElement">
            <div className="mainPageArticleButtonZone">
                <button className="opinionButton">Upvote</button>
                <p>{article.score}</p>
                <button className="opinionButton">Downvote</button>
            </div>
            <div className="mainPageArticleTextZone">
                <h2>{article.title}</h2>
                {
                    article.previewImage ? <img src={article.previewImage} alt="Article image if any"/> : ""
                }
                {
                    article.content ? <p className="scrollZones" style={{maxHeight: "300px"}}>{article.content}</p> : ""
                }
            </div>
        </div>
    );
}