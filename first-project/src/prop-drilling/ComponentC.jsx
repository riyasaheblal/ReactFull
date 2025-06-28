import React from 'react'

const ComponentC = (props) => {
    console.log(props)
    let{instrument}=props
  return (
    <>
    <h1>ComponentC has recived {instrument}</h1>
    </>
    
  )
}

export default ComponentC