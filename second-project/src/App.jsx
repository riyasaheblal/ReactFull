
import { useState } from 'react'
import DisplayUsers from './fetchdata/DisplayUsers'
import SideEffect from './fetchdata/SideEffect'
import ComponentA from './lifecycle/ComponentA'
import ErrorBoundary from './lifecycle/errorboundary/ErrorBoundary'
import Product from './lifecycle/errorboundary/Product'
import Modal from './portals/Modal'
import ParentComp from './memoization/ParentComp'
import MemoComp from './memoization/MemoComp'
import DisplayProduct from './fetchdata/DisplayProduct'
import TodoList from './Task/TodoList'
import Counter1 from './Counter1'
import Counter2 from './Counter2'
 
function App() {
 
  let[open, setOpen]=useState(false)

  return (
    <>
{/* <ComponentA/> */}
{/* <ErrorBoundary>
<Product product="laptop"/>
<Product product="mobile"/>
</ErrorBoundary> */}
{/* <SideEffect/> */}
{/* <DisplayUsers/> */}
{/* <DisplayProduct/> */}
{/* <button onClick={()=>setOpen(true)}>Show Model</button>
<Modal open={open} setOpen={setOpen}/> */}
{/* <ParentComp/> */}
{/* <MemoComp/> */}
{/* <TodoList/> */}
{/* <Counter1/> */}
<Counter2/>
    </>
  )
}

export default App
