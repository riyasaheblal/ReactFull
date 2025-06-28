import React from 'react'
import ComponentC from './Componentc'


const ComponentB = (props) => {
    console.log(props)
    let{instrument}=props
  return (
    <>
    <ComponentC instrument={instrument}/>

    </>
    
  )
}

export default ComponentB