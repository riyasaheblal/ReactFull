import React from 'react'

const Count = (props) => {

    let{count,text}=props  //destructed

    console.log("Rendering Count Component for "+ text);
  return (
   <>
   <h2>{text}:{count}</h2>
   </>
  )
}

export default React.memo(Count) 