import React from 'react'

const ButtonComp = (props) => {

    let{children,Increment}=props
    console.log("Rendering ButtonComp Component for "+ children);
  return (
   <>
   <button onClick={Increment}>{children}</button>
   </>
  )
}

export default React.memo(ButtonComp) 