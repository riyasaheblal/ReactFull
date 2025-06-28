import React from 'react'

const Childcomp = (props) => {
    console.log(props);     //{setMessage:undefined}
    let{setMessage}=props //destructed
    

  return (
    <>
    <h2>Childcomp sending data to Newparent component indirectly with the help of callback function</h2>
    <button onClick={()=>setMessage("Good AfterNoon Everyone")}>change Message</button>
    </>
  )
}

export default Childcomp