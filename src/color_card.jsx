import React from "react";
import isMobileDevice from "./ismobile";

function Colorcard(props){
    return (
        <div className="square" style={{backgroundColor:props.color,width:isMobileDevice ? "120px" :"290px"}}>{props.colorname}</div>
        )
}
export default Colorcard 