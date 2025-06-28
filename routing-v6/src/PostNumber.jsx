import React from 'react'
import { useParams } from 'react-router-dom'

const PostNumber = () => {

//! useParams() ==> is used to get parameter from the url

    let parameters= useParams()      //returns an object
    console.log(parameters);   //{num:'2'}  ==>{paraName: paramValue}
    let{num}=parameters
    

  return (
    <div>PostNumber {num}</div>
  )
}

export default PostNumber