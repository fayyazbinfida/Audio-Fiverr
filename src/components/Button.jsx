import React from "react";

function Button(props) {
    return(
        <>
            <button className={props.sty} onClick={props.what}>{props.label}</button>
        </>
    )
}

export default Button