import { useState, useEffect } from "react";

const getWidowSize = () => {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
}

export const useCheckWindowSize = () => {
    const [windowSize, setWindowSize] = useState(getWidowSize);
    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize(getWidowSize());
        }
        window.addEventListener("resize", handleWindowResize);
        return () => {window.removeEventListener("resize", handleWindowResize);}
    }, []);
    return { windowSize }
}