import React,{useState} from "react";

function Count(){
    const [count,Setcount]=useState(0);

    function countIncrement(){
       Setcount(count => count +1);
       Setcount(count => count +1);
    }
    function countDecrement(){
        Setcount(count => count - 1);
     }
    function countReset(){
        Setcount(count => 0);
    }
    return(
        <div>
            <label className="countdisplay">{count}</label>
            <button onClick={countIncrement}>Increase</button>
            <button onClick={countDecrement}>Decrease</button>
            <button onClick={countReset}>Reset</button>
            
        </div>
    );

}
export default Count;