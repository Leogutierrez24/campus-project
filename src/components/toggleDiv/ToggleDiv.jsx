import React, {useRef} from "react";

const ToggleDiv = ({children, divClass, prop}) => {
    const divRef = useRef(null);

    const handleToggleDiv = () => {
        divRef.current.classList.toggle("showContent");
    }

    return(
        <div className={divClass} ref={divRef} onClick={handleToggleDiv}>
            {children}
        </div>
    );
}

export default ToggleDiv;