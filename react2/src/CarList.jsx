import React,{useState} from "react";
function CarList(){

    const [car,setCar]=useState([])
    const [year,setYear] =useState(new Date().getFullYear())
    const [make,setMake]=useState("")
    const [model,setModel]=useState("")

    function AddCar(){
        const newCar={carYear:year,
                 carMake:make,
                 carModel:model

        }
       setCar(c=>[...c,newCar])
    }
    // function RemoveCar(){

    // }
    function HandleYear(event){
      setYear(event.target.value)
    }
    function HandleMake(event){
        setMake(event.target.value)
    }
    function HandleModel(event){
        setModel(event.target.value)
    }
    return(
        <div>
            <p>Your Car List</p>
            <ul>
                {car.map((element,index)=>
                      <li key={index}>{element.carYear} {element.carMake} {element.carModel}</li>
            )}
                    
              
            </ul>
            <input type="number" value={year} onChange={HandleYear}/><br />
            <input type="String" value={make} onChange={HandleMake}/><br />
            <input type="String" value={model} onChange={HandleModel}/><br />
            <button type="submit" onClick={AddCar}> Add Car</button>
        </div>
    );
}
export default CarList;