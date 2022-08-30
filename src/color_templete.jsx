import React from "react";
import Colorcard from "./color_card";
import hexarr from "./hexaaray"

function Card(){
    function helper(hex){
        console.log(hex);
        return <div className=" col col-lg-3 col-6">
        <Colorcard  color={hex}colorname={hex} />
              </div>
    }
    return (
        <div className="container row">
                {hexarr.map(helper)}
        <h1 className="non">colors</h1>
        </div>
    )
}
export default Card