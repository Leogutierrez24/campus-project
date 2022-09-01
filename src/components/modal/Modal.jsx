import { React } from "react";
import crossIcon from "../assets/icons/x-circle-fill.svg";
import "./modal.scss";

const Modal = ({ children, func }) => {
    return(
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <button className="close-modal__btn" onClick={func}>
                        <img src={crossIcon} alt="cerrar" className="close-modal__icon"/>
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
}

export default Modal;