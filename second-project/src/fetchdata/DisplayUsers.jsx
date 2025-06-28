import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'


//! axios => promise based library used for http method
//npm i axios ==> External library install
const DisplayUsers = () => {
  let[users,setUsers]=useState([])
  // useEffect will render after component
//! only want to invoke once so side effect in FBC handled by useEffect but
// ! we want to invoke only once useEffect(callback,Empty array)
    useEffect(()=>{
     axios.get("https://api.github.com/users")      //return promise
     .then((response)=>{
        console.log(response)
        console.log(response.data)
        setUsers(response.data)
     })
    },[])

  return (
    <>
    <h2>Users</h2>
   
    {users.map((value,index)=>{
      return(
      <Fragment key={value.id}>
<h2>{value.login}</h2>
<img src={value.avatar_url} alt="" />
      </Fragment>
      )
    })}
   
</>
  )
}

export default DisplayUsers