import React from "react";
import "./new.scss";

const New = ({title, subtitle, date, priority}) => {
    return(
        <section className={`news-${priority}`}>
            <h2 className="newsTitle">{title}</h2>
            <p className="newsSubtitle">{subtitle}</p>
            <span className="newsDate">{date}</span>
        </section>
    );
};

export default New;