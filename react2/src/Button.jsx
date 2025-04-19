
function Button(){
    console.log("Component rendering...");
    let count=0;
    const handle3=(e)=>e.target.textContent="Ouch😡😡😡"
    const handle=(name)=>{
        if(count<3){
            count++
            console.log(`${name} you clicked me ${count} times`)
        }
        else{
            console.log("stop clicking me")
        }
    }
    const handle2=(name) => console.log(`${name} stop clicking me`)
    return(
        <button onClick={(e)=> handle3(e)}>Click Me😡😡🎂</button>
    )
}
export default Button;