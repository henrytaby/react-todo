import React from "react";
import ReactDOM from "react-dom";

function Modal({children}){
    return ReactDOM.createPortal(
        <div className="ModalBackground">
            <div className="ModalContainer">
                {children}
            </div>
        </div>,
        document.getElementById('modal')
    );

}

export {Modal};