function List(props){
    // const fruits=[{name:"apple",id:"1"},
    //     {name:"banana",id:"2"},
    //     {name:"guava",id:"3"},
    //     {name:"mango",id:"4"},
    //     {name:"watermelon",id:"5"},
                   


    // ]
   const fruits=props.itemlist
    const listitems =fruits.map(fruit => <li key={fruit.id}>{fruit.id}:{fruit.name}</li>)
    return(
       <ul>{listitems}</ul>
    );
}
export default List