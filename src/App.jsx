import React from "react";
import Input_color from "./color_input"
import Card from "./color_templete"
import Footer from "./footer"
function App() {
  return (
   <div>
    <Input_color/>
    <br></br>
    <h3 className="heading">Best color picks for you</h3>
        <Card/>
    <Footer/>
    </div>
  );
}

export default App;
