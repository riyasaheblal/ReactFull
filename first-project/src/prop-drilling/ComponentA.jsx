import React from 'react'
import ComponentB from './ComponentB'

const ComponentA = () => {
    let instrument="Guitar"
  return (
    <>
   <ComponentB instrument={instrument}/>
    
    </>
    
  )
}

export default ComponentA