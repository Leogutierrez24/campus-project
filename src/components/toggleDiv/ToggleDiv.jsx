import React, {useRef} from "react";

const ToggleDiv = ({children, divClass, headerClass, headerTitle, headerImg}) => {
    const divRef = useRef(null);

    const handleToggleDiv = () => {
        divRef.current.classList.toggle("showContent");
    }

    return(
        <div className={divClass} ref={divRef}>
            <div className={headerClass} onClick={handleToggleDiv}>
                <p>{headerTitle}</p>
                <img src={headerImg} alt="Ver más" />
            </div>
            {children}
        </div>
    );
}

export default ToggleDiv;