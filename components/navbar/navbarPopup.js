import React from "react";

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popupInner">
                <button className="closePopupButton">Close</button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup