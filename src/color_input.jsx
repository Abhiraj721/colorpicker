import React,{useState} from "react"

function Input_color(){
    const [hexcode,Sethexcode]=useState("#000000")
    function main(){
 var hex_code=document.getElementById("color_pick").value
 Sethexcode(hex_code)
 console.log(hexcode+"f")
    }
    return (<div>
        <center>
            <br></br>
            <h3 style={{fontSize:"21px"}}>Select color</h3>
            <table>
                <tr>
                    <td>
                    <input id="color_pick"type="color" onChange={main} />
                    </td>
                    <td>
                    <h1 className="hexcode"><b> Hexcode:</b>  {hexcode}</h1>
                    </td>
                </tr>
            </table>
            </center>
            
        </div>)
    
}
export default Input_color