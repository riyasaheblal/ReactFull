const Comp1=(props)=>{
    console.log(props);    //{student: 'Riya', age: 25}
    let{student,age,status,car,content}=props     //destructing 
return(
    <>
    <h1>Child Comp</h1>
    <h2>Name:{student}</h2>
     <h2>Age:{age}</h2>
     {/* boolean,undefined,null datatype cannot be visible on UI but by using condtion its vissible */}
     <h2>status:{(status)? "online":"offline"}</h2>
     <h2>Car:{car==undefined? "car parked": "Not parked"}</h2>
     <h2>content:{content==null? "Empty": "Some Data"}</h2>

    </>
)
}


export default Comp1