import React, { Fragment, useState } from 'react'

const TodoList = () => {

let[data, setData]=useState("");    //to store the single value of task
let[task,setTask]=useState([])     //  to store the multiple value of task

let handleonchnage=(e)=>{
    setData(e.target.value)
}
let handleSubmit=(e)=>{
    e.preventDefault()   //avoid refresh of whole page if we will not add this all data will erase 
    if(data==""){
         alert("please add some task")
    }else{
    setTask([...task,data])      //add multiple data in task and store so we will use spread operator   
    //["Task1","Task2","Task3"]==> inside this is element   //[0,1,2]
    setData("")   //because i want data inserted then it become empty and store in task
}
}


let handleDelete=(x)=>{     //x=> index of the task to be deleted ,x=1
    
    let filterdArray=task.filter((value,index)=> index!==x)   //0!=1, 1!=1, 2!=1
    console.log(filterdArray)    //["Task1","Task3"]
    setTask(filterdArray)

}
  return (
   <>
   <h2>ToDoList</h2>
   <form onSubmit={handleSubmit}>
<input type="text"  value={data} onChange={handleonchnage} />
<button>+</button>
   </form>

   {
     task.map((value,index)=>{
        return(
            <Fragment key={index}>
           <h2>{value}</h2>
           <button onClick={()=>handleDelete(index)}>Delete</button>
            </Fragment>
        )
     })

   }
   </>
  )
}

export default TodoList