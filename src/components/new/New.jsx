import React from "react";

const New = ({title, subtitle, date}) => {
    return(
        <section>
            <h2>{title}</h2>
            <p>{subtitle}</p>
            <span>{date}</span>
        </section>
    );
};

export default New;