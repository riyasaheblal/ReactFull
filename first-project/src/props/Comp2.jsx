import { Fragment } from "react"

const Comp2=(props)=>{
console.log(props)     //{colors: Array(4)}
    let{colors}=props     //destructing
    console.log(props)   //(4)['red', 'yellow', 'green', 'white']
   // let[c1,c2,c3,c4]= colors   //!destructring of array
    
    return(
        <>
        {/* <ul>
<li>{c1}</li>
<li>{c2}</li>
<li>{c3}</li>
<li>{c4}</li>
        </ul> */}

<h2>map(callback function /arrow function) is an array method ,used to itreate over array</h2>
<ul>
{
colors.map((value,index)=>{
return(
    <Fragment key={index}>
<li>{value}</li>

    </Fragment>
)

})
}
</ul>
        </>
    )
}


export default Comp2