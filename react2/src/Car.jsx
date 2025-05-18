
import React,{useState} from "react";

function Car(){
    const [car,setCar]=useState({year:2024,
                             make:"ford",
                             model:"Mustang"
})
function Changeyear(event){
    setCar({...car,year:event.target.value})
}




    return(
        <>
        <div>
            <h1>Your car is {car.year} {car.make} {car.model}</h1>
            <input type="number" value={car.year} onChange={Changeyear}/>
            {/* <input type="text" value={car.make} onClick={Changemake}/>
            <input type="text" value={car.model} onClick={Changemodle}/> */}
        </div>
        </>
    )

}

export default Car;