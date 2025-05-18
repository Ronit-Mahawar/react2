import React,{useState} from "react";
function ColorPicker(){
 const [color,setColor]=useState("#FFFFFF")

function HandleColor(event){
    setColor(event.target.value)
}
 return(<div className="color-picking">
       <h1>color Picker</h1>
       <div className="color-display" style={{background:color}}> 
           <p>selected color:{color}</p>
       </div>
       <label htmlFor="">Choose color</label>
       <input type="color" value={color} onChange={HandleColor}/>
 </div>

 );
}
export default ColorPicker;