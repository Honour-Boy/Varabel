import React from "react";

export default function Alert({msg}){
    const style = msg.show === true ? {display: "block"} : {display: "none"}
    
    return(
        <div style={style} className="alert-container">
            <div className="header">
                <h1>Alert</h1>
            </div>
            <div className="message">
                <h2>{msg.value}</h2>
            </div>
        </div>
    )
}