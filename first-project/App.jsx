//!Functional Based Component

import Classcomp from "./src/Classcomp";
import ConditionalRendering from "./src/Conditional-Rendering/ConditionalRendering";
import Inline from "./src/CSS-React/Inline";


import Rainy from "./src/css-react/Rainy";
import Summer from "./src/css-react/Summer";
import Winter from "./src/css-react/Winter";
import './global.css'
import Defaultcomp from "./src/Defaultcomp";
import Fragcomp from "./src/Fragcomp";
import Functionalcomponent from "./src/Functionalcomponent";
import ComponentA from "./src/prop-drilling/ComponentA";
import Parentcomp from "./src/props/Parentcomp";
import { Counterapp } from "./src/states/Counterapp";
import Firststate from "./src/states/Firststate";
import Team from "./src/Team";
import Navbar from "./src/task/Navbar";
import Displayproduct from "./src/task/Displayproduct";
import NewContext from "./src/context-api/NewContext";
import CounterContext from "./src/context-api/CounterContext";
import Counter from "./src/context-api/Counter";
import Team1 from "./src/hoc/Team1";
import Team2 from "./src/hoc/Team2";
import Refcomp from "./src/reference/Refcomp";
import Newparent from "./src/childtoparent/Newparent";
import UncontrolledForm from "./src/forms/UncontrolledForm";
import ControlledForm from "./src/forms/ControlledForm";
import Details from "./src/forms/Details";

const App=()=>{
//It is Written above the return statement or JSX  var used everwhere bt let in block
  //let d="Saturday"

  // ! → Red

// * → Green

// ? → Blue

// TODO → Orange

// FIXME → Red\

// Shift + Alt + F   --> code format

  //JSX
    return (
      <main className="">
    {/* <h2>Hello Riya</h2>
    <br/>
    <h3>Hello</h3> */}
    {/*Event must be used in camelCase onClick,onSubmit */}
    {/* <label htmlFor=""></label> */}
    {/*Jsx Expression ={} */}
    {/* <h4>Today is {d}</h4> */}
    {/*call child  */}
    {/* <Functionalcomponent/>
    <Classcomp/>
    <Fragcomp/>
    <Parentcomp/> */}
    {/* <Defaultcomp team="MI" captain="Hardik" trophy={5}/>
    <hr/>
    <Defaultcomp team="RCB" captain="Viray" />
    <hr/>
    <Defaultcomp/> */}
    {/* <Team></Team>
    <Team>Mechnacial</Team>
    <Team>Civil</Team> */}
    {/* <ComponentA/> */}
    {/* <Firststate/> */}
    {/* <Counterapp/> */}
    {/* <Parentcomp/> */}
    {/* <ConditionalRendering/> */}
   {/* <Inline/>
   <Rainy/>
   <Winter/>
   <Summer/> */}
   {/* <Navbar/>
   <Displayproduct/> */}
   {/* <NewContext/> */}
   {/* <CounterContext>
      <Counter />
    </CounterContext> */}
   {/* <Team1/>
   <Team2/> */}
   {/* <Refcomp/> */}
   {/* <Newparent/> */}
   {/* <UncontrolledForm/> */}
   {/* <ControlledForm/> */}
   <Details/>
    </main>
)};
export default App;

export const Test=(x1,x2)=>{
     x1=2;
     x2=4;

   const Test1= x1+x2;


     return <h2>{Test1}</h2>
}


export const Test3=(x1,x2)=>{
return x1*x2;
}
const Testq=Test3(8,9)
console.log(Testq);


