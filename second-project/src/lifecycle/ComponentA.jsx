//rcc 
import React, { Component } from 'react'
import ComponentB from './ComponentB';
class ComponentA extends Component { 
    //! 1] Mounting phase 
      
         constructor(props){
            super(props) 
                  this.state = {
                subject : "Reactjs"
            }
     // Best place to initialise state and bind this keyword. 
     //Cannot code anything related to side-effects . 
     console.log("ComponentA constructor");
         }    

         static getDerivedStateFromProps(){
            // Rarely used method 
            //Change in state because of props 
     //Cannot code anything related to side-effects . 
      //Either returns an object or null 
      console.log("ComponentA getDerivedStateFromProps");
        return null 
         }

         componentDidMount(){
           //!This method gets invoked  after the render method and for only "ONCE".
           //! Can code anything related to side-effects . 
            console.log("ComponentA componentDidMount");   
         }


         //!2] updating phase

         shouldComponentUpdate(){
            //Decides wheather the component should be update or not 
            //Returns a boolean value
            //Cannot code anything related to side-effects . 
      console.log("ComponentA getDerivedStateFromProps");
      return true
         }

         getSnapshotBeforeUpdate(){
//rarely used method
            //Either returns a value or null
            //Cannot code anything related to side-effects . 
      console.log("ComponentA getSnapshotBeforeUpdate");
      return null
         }


         componentDidUpdate(){
            //! This method get invovked after each re-rendering of components
            //!can code anything related to side-effects . 
      console.log("ComponentA componentDidUpdate");
         }

 render() {
    //Only method that is mandatory. 
     //Cannot code anything related to side-effects . 
       console.log("ComponentA render");
       
    return (
     <>
     <h1>Compnent A</h1>
     {this.state.subject=="Reactjs"? <ComponentB/>:<></>}
     <p>{this.state.subject}</p>
     <button onClick={()=>this.setState({subject:"Nodejs"})}>change subject</button>
     </>
    )
  }
}

export default ComponentA 