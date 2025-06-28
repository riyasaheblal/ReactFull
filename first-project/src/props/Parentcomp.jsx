import Comp from "./Comp"
import Comp1 from "./Comp1"
import Comp2 from "./Comp2"
import Comp3 from "./Comp3"

const Parentcomp=()=>{

//let colors=['red','yellow','green','white']
let details={
    fname:"Riya",
    favhobby:"Travelling",
    "favPart":"hills/Mountains"
    
}

return(
    <>
    <h1>Parent Comp</h1>
    {/* <Comp1/>    //child render */}
    {/* <Comp1 student="Riya" age={25} status={true} car={undefined} content={null}/> */}
    {/* <Comp2    colors={colors}/> 
    <Comp3 details={details}/> */}
    <Comp employeename="riya" employeeid={10} role="java Developer"></Comp>
    </>
)
}


export default Parentcomp