import React from "react";
import Lama from "../../ressources/images/1002997-Lama.jpg"

export default function MainPageArticle() {
    return (
        <div className="mainPageArticlesContainer hiddenScrollBar" style={{margin: "auto"}}>
            <div className="mainPageArticle">
                <div className="mainPageArticleTextZone">
                    <h2>some shit.</h2>
                    <div className="mainPageArticleButtonZone">
                        <button>Upvote</button>
                        <button>Downvote</button>
                    </div>
                    <p className="hiddenScrollBar" style={{maxHeight: "200px"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat mi in iaculis venenatis. Maecenas blandit sapien dui, id pellentesque odio mattis non. 
                        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi id euismod dui, eget dictum turpis. Donec ac lorem quis nisi auctor 
                        cursus sed non magna. Praesent cursus leo ut lacinia posuere. Donec egestas nunc venenatis nunc accumsan imperdiet. Curabitur faucibus tempus ipsum, tincidunt 
                        commodo ex accumsan quis. Donec nec condimentum odio. Aenean sed dictum turpis. Aliquam elit ante, blandit ut ipsum vel, fringilla placerat felis. Phasellus vel 
                        ante accumsan diam tristique pharetra sed a erat. Donec non aliquet justo. Cras ut neque mattis augue finibus condimentum eu vel enim.
                        <br/><br/>
                        In pharetra vehicula orci, scelerisque lacinia arcu luctus nec. Suspendisse potenti. Fusce interdum sagittis orci at faucibus. Pellentesque volutpat velit sit amet 
                        nisi posuere, ac pharetra turpis ultrices. Fusce leo sapien, iaculis non ipsum sit amet, maximus facilisis lacus. Praesent non odio sed turpis mattis tempor. In 
                        eros dolor, tempus a ligula id, interdum suscipit ante. Donec rutrum orci nisl, accumsan pulvinar ipsum lacinia ut. Donec sed dictum tortor, et sollicitudin metus. 
                        In vel sagittis lectus, sit amet luctus purus. Suspendisse sit amet nibh ac urna sagittis efficitur. Quisque quis commodo odio. Quisque ultrices malesuada metus nec 
                        eleifend. Donec malesuada non odio vel dictum.
                    </p>
                </div>
                <img src={Lama} alt="it's a lama" style={{margin: "auto", width: "40%", height: "auto"}}/>
            </div>
            <div div className="mainPageArticle">
            </div>
        </div>
    );
}