import React from "react";
import Lama from "../../ressources/images/1002997-Lama.jpg";
import Bob from "../../ressources/images/Bob.jpg"

export default function ArticlePage() {
  return (
    <div className="fullArticleContainer">
        <div className="fullArticleButtons">
            <button className="opinionButton">upvote</button>
            <button className="opinionButton">downvote</button>
        </div>
        <div className="fullArticleContent scrollZones">

            <h1 style={{width: "100%", textAlign: "center"}}>Some other shit.</h1>
            <img src={Lama} alt="it's a lama" />
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tortor
            risus, pharetra et dolor vitae, tincidunt consectetur augue. Duis est
            turpis, faucibus non sapien ut, suscipit condimentum leo. Etiam
            vestibulum, massa nec ullamcorper tincidunt, tellus eros bibendum urna,
            a commodo justo purus quis sapien. Donec pretium ex et velit tempus
            pharetra. Sed porttitor et orci non tincidunt.<br/><br/> Cras eget sem lectus. Ut
            id erat vel ipsum euismod fermentum at ac dui. Praesent at eros erat.
            Donec consectetur odio ex, ac pellentesque augue dictum nec. Vestibulum
            non sem nulla. Donec sollicitudin elit non augue luctus fermentum. Sed
            commodo varius congue. Donec sed nisi sem. Integer tincidunt finibus
            mauris nec dictum. Curabitur eu turpis vitae velit tempor luctus in non
            odio. Sed vestibulum massa sit amet facilisis placerat. Donec ex dolor,
            lacinia nec rutrum eget, ultrices in diam. Maecenas vitae mauris ac
            felis vestibulum ullamcorper vel sed justo.<br/><br/> Quisque sodales ornare
            tortor sollicitudin semper. Nunc volutpat tempus quam, et consectetur
            urna viverra eget. In nec tincidunt ex. Donec ut nunc risus. Quisque
            tempus arcu vitae tortor mattis, vel lacinia ipsum tempor. In sed
            malesuada justo, ac posuere odio. Curabitur eu diam non diam tempor
            feugiat. Aenean mi eros, finibus id posuere a, placerat nec enim.
            Phasellus tempus nunc blandit erat vehicula maximus. Mauris ac viverra
            nibh, at semper dolor. Suspendisse arcu velit, fringilla vitae molestie
            a, tempor at eros. Morbi ut rhoncus mi, a tristique enim.
            </p>
        </div>
        <div className="fullArticleComments scrollZones">
            <div className="myfullArticleComment borderedElement">
                <img src={Bob} alt="profil pic"/>
                <p>commentaire</p>
            </div>
            <div className="yourFullArticleComment borderedElement">
                <img src={Bob} alt="profil pic"/>
                <p>commentaire</p>
            </div>
            <div className="myfullArticleComment borderedElement">
                <img src={Bob} alt="profil pic"/>
                <p>commentaire</p>
            </div>
            <div className="yourFullArticleComment borderedElement">
                <img src={Bob} alt="profil pic"/>
                <p>commentaire</p>
            </div>
            <div className="myfullArticleComment borderedElement">
                <img src={Bob} alt="profil pic"/>
                <p>commentaire</p>
            </div>
            <div className="myfullArticleComment borderedElement">
                <img src={Bob} alt="profil pic"/>
                <p>commentaire</p>
            </div>
            <div className="yourFullArticleComment borderedElement">
                <img src={Bob} alt="profil pic"/>
                <p>commentaire</p>
            </div>
            <div className="myfullArticleComment borderedElement">
                <img src={Bob} alt="profil pic"/>
                <p>commentaire</p>
            </div>
            <div className="myfullArticleComment borderedElement">
                <img src={Bob} alt="profil pic"/>
                <p>commentaire</p>
            </div>
        </div>
    </div>
  );
}
