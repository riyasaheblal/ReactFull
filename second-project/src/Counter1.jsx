import {useReducer} from 'react'

let initialState = 0

//reducer(state , action)=> It takes state & action as an argument & returns a newState.

let reducer = (state , action)=>{
     // state => initialState = 0
     // action => "increment"
     switch(action){
        case "increment": 
        return state + 1

        case "decrement": 
        return state - 1

        case "reset": 
        return 0
     }
}

const Counter1 = () => {

    // let [state , dispatch] = useReducer(reducer , initialState)
    let [count , dispatch] = useReducer(reducer , initialState)
  return (
    <>
    <h2>Count : {count}</h2>
    <button onClick={()=>dispatch("increment")}>Increment</button>
    <button onClick={()=>dispatch("decrement")}>Decrement</button>
    <button onClick={()=>dispatch("reset")}>Reset</button>
    </>
  )
}

export default Counter1 