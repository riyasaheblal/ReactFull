import React, { useState } from 'react'

const Details = () => {

    //! 1. Intilised the state
    let [data,setData]=useState({
        fname:"",
        lname:"",
        gender:"",
        course:""
    })
    let{fname,lname,gender,course}=data   //desrtructing

//! 3. state updation (onChange)
let handleChange=(e)=>{
    console.log(e.target);
    
    //name=key and value=value
    let{name,value}=e.target    //destructing
    setData({...data, [name]:value})   //{fname:"Riya"}, {lname:"Gupta"}
    //!  ...data (spread operator )==> {fname:"Riya",lname:"Gupta"}
    //!  ...data==>it store all the key -value pairs by spreading them within the obhject
    
}

let handleSubmit=(e)=>{
    e.preventDefault()
    console.log(data);    //data will be in object {}
    setData({fname:"", lname:"",gender:"",course:""})
}

    //! 2. pass the name & value attribute input field
  return (
    <>
    <h2>Details</h2>
    <form onSubmit={handleSubmit}>
    <div>
        <label>FirstName</label>
        <input type="text" name='fname' value={fname} onChange={handleChange} />
    </div>
    <div>
        <label>LastName</label>
        <input type="text" name='lname' value={lname}  onChange={handleChange}/>
    </div>

    <div name='gender' value={gender}>
        <label>Gender</label>
        <input type="radio" name='gender' value="Male"/>Male<input type="radio" name='gender' value="Female" onChange={handleChange}/>Female
    </div>

    <label>Course</label>
    <select name='course' value={course} onChange={handleChange}>
        <option value="">Select</option>
        <option value="mernstack">Mern fullstack</option>
        <option value="JavaFullStack">Java fullstack</option>
        <option value="Software Testing">Software Testing</option>
    </select>
    <br/>
    <button>Submit</button>
    </form>
    </>
  )
}

export default Details





// let e={
//     target={
// value:"Riya",
// name:"fname" or "lname" ...multiple 
//     }
// }