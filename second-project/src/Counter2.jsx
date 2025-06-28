import {useReducer} from 'react'

let initialState = {
    count : 0 
}

//reducer(state , action)=> It takes state & action as an argument & returns a newState.

let reducer = (state , action)=>{
     // state => initialState = {count : 0}
     // action => {type : "increment" , value : 5}
     switch(action.type){
        case "increment": 
        return {count : state.count + action.value}

        case "decrement": 
        return {count : state.count - action.value}

        case "reset": 
        return {count : 0}
     }
}

const Counter2 = () => {

    // let [state , dispatch] = useReducer(reducer , initialState)
    let [state , dispatch] = useReducer(reducer , initialState)
  return (
    <>
    <h2>Count : {state.count}</h2>
    <button onClick={()=>dispatch({type : "increment" , value: 1})}>Increment by 1</button>
    <button onClick={()=>dispatch({type : "decrement" , value: 1})}>Decrement by 1</button>
    <button onClick={()=>dispatch({type : "increment" , value: 5})}>Increment by 5</button>
    <button onClick={()=>dispatch({type : "decrement" , value: 5})}>Decrement by 5</button>
    <button onClick={()=>dispatch({type : "reset"})}>Reset</button>
    </>
  )
}

export default Counter2