import React from "react";
import New from "../new/New";
import newsData from "../data/newsData";

const News = () => {
    
    return(
        <div className="news-container">
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
    );
};

export default News;