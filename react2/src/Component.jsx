import React,{useState} from "react";
function Component(){
    const [name, Setname ]=useState("ron");
     
    function NameChangeHandler(event){
        Setname(event.target.value)
    }

    return(<>
         <div>
   
            <input value={name} onChange={NameChangeHandler} />
            <p>name: {name}</p>
         </div>
    </>);
}

export default Component;