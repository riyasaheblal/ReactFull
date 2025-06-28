
//!class Based Component
//! render() is mandatory and inside that JSX used
//! start with class and extends React,Component and import react

import { Component } from "react"

//import React from "react";


// class Classcomp extends React.Component{
// render(){
//     return(
//         <>
//         <h1>Hello Class Based Component</h1>
//         </>
//     )
// }
// }
//export default Classcomp

class Classcomp extends Component{
render(){
    return(
        <>
        <h1>Hello Class Based Component</h1>
        </>
    )
}
}
export default Classcomp