
function Student(props){
    return(
        <>
        <div>
            <p>name: {props.name} </p>
            <p>rollNo:{props.rollNo}</p>
            <p>is Student: {props.isStudent? "yes":"no "}</p>
        </div>
        <nav>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus recusandae suscipit voluptatem repudiandae asperiores molestiae modi iusto molestias minus optio facilis eveniet aspernatur nulla ut omnis perferendis quas, delectus ipsum. </p>
        </nav>
        </>
    );
    
}
export default Student;