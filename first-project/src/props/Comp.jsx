import React from 'react'

const Comp = (props) => {
    console.log(props);  //{employeename: 'riya', employeeid: 10, role: 'java Developer'}
    let{employeename,employeeid,role}=props   //destructed
    console.log(props)
    
  return (
    <>
    <h1>Cedge Employee</h1>
    <h3>EmployeeName:::{employeename}</h3>
    <h3>EmployeeId:::{employeeid}</h3>
    <h3>Role:::{role}</h3>
    </>
  )
}

export default Comp