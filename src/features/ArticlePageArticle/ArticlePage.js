import React from "react";
import Lama from "../../ressources/images/1002997-Lama.jpg";
import Bob from "../../ressources/images/Bob.jpg"
import { useSelector } from "react-redux";
import { selectArticleData } from "../articledata/articlepagearticledata";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadArticleData } from "../articledata/articlepagearticledata";

export default function ArticlePage() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const articlePermaLink = urlParams.get("articlePermaLink");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadArticleData(articlePermaLink));
    }, [dispatch]);

    const articleData = useSelector(selectArticleData);
    
  return (
    <div className="fullArticleContainer">
        <div className="fullArticleButtons">
            <button className="opinionButton">upvote</button>
            <button className="opinionButton">downvote</button>
        </div>
        <div className="fullArticleContent scrollZones">
            <h1 style={{width: "100%", textAlign: "center"}}>{articleData.title}</h1>
            {
                articleData.isVideo ? "This is a video" : <div><img src={Lama} alt="it's a lama" /><p></p></div>//how the fuck do I do this
            }
        </div>
        <div className="fullArticleComments scrollZones">
        </div>
    </div>
  );
}
