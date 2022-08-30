import React from "react";
import New from "../new/New";
import newsData from "../data/newsData";
import "./news.scss";

const News = () => {
    
    return(
        <div className="news-container">
            <h2 className="news-title" id="news">Noticias</h2>
            <div className="news-section">
                <div className="left-section">
                    <New {... newsData[0]}/>
                </div>
                <div className="right-section">
                    <div className="top-side">
                        <New {... newsData[1]}/>
                    </div>
                    <div className="bot-side">
                        <New {... newsData[2]}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;