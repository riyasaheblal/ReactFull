import React, { createContext } from 'react'
import Cutomer from './Cutomer';
 
export let ContextApi=createContext();


const NewContext = () => {
  return (
    <ContextApi.Provider value="I have come from context">
       <Cutomer/> 
    </ContextApi.Provider>
  )
}

export default NewContext