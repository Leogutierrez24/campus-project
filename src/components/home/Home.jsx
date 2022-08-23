import React from "react";
import Contact from "../contact/Contact";
import News from "../news/News";
import "./home.scss";

const Home = () => {
    return(
        <div className="home">
            <div className="hero">
                <h1 className="home-title">Bienvenido al campus virtual</h1>
            </div>
            <News />
            <Contact />
        </div>
    );
}

export default Home;