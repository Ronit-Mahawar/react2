import Student from "./Student";
import List from "./List"   
import Button from "./Button"            

function App() {
  const fruits=[{name:"apple",id:"1"},
    {name:"banana",id:"2"},
    {name:"guava",id:"3"},
    {name:"mango",id:"4"},
    {name:"watermelon",id:"5"},
               


]
  return(<>
  <Student name="ronit" rollNo={18} isStudent={true}/>
  <List itemlist={fruits}/>  
  <Button/>
  </>
  );
    f

}

export default App
