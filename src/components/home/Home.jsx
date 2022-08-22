import React from "react";
import Contact from "../contact/Contact";
import News from "../news/News";

const Home = () => {
    return(
        <div className="home">
            <h1 className="home-title">Bienvenido al campus virtual</h1>
            <News />
            <Contact />
        </div>
    );
}

export default Home;