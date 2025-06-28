import React, { useContext } from 'react'
import {ContextApi} from './NewContext'
const Cutomer = () => {
    let data=useContext(ContextApi)
    console.log(data)
  return (
<>
<h2>{data}</h2>
</>
)
}

export default Cutomer