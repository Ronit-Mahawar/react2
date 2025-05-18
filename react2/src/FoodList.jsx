import React,{useActionState, useState} from "react";
function FoodList(){
    const [food,SetFood]=useState(["apple","orange","mango"]);

    function AddItem(){
     const foodInput=document.getElementById("FoodInput").value;

      SetFood(f=>[...f,foodInput])
      document.getElementById("FoodInput").value="";


    }
    function RemoveItem(index){
      SetFood(food.filter((_,i)=>i!=index))

    }

    return(
        <div>
           <p>Food Shopping List</p>
           <ul>
            {food.map((food,index)=>(
                <li key={index} onClick={()=>RemoveItem(index)}>{food}</li>
            ))

            }
           </ul>
           <input id="FoodInput"type="text" placeholder="enter what you want to add" />
           <button type="submit" onClick={AddItem}> Submit</button>
        </div>
    );
}
export  default FoodList;