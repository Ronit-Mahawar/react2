import Student from "./Student";
import List from "./List"   
import Button from "./Button"  
import ProfilePic from "./ProfilePic";  
import Component from "./Component";        
import ColorPicker from "./ColorPicker";
import Count from "./Count";
import Car from "./Car";
import FoodList from "./FoodList";
import CarList from "./CarList";

function App() {
  const fruits=[{name:"apple",id:"1"},
    {name:"banana",id:"2"},
    {name:"guava",id:"3"},
    {name:"mango",id:"4"},
    {name:"watermelon",id:"5"},
               


]
  return(<>
  <CarList/>
  <FoodList/>
  <Car/>
  <Count/>
  <Component/>
  <Student name="ronit" rollNo={18} isStudent={true}/>
  <List itemlist={fruits}/>  
  <Button/>
  <ProfilePic/>
  <ColorPicker/>
  </>
  );
    

}

export default App
