import React, { Component } from 'react'

export default class ErrorBoundary extends Component {


    constructor(props){
        super(props)

        this.state={
          isError:false         //no error
        }
    }

    //!Error handlinng phase
    //1
    static getDerivedStateFromError(error){
        //!helps to display a fallback(Alternative)  UI
        return {isError:true} 
    }

    //2
    componentDidCatch(error,info){
        //!Display the info of error
    }


  render() {
  
      if(this.state.isError==true){
        return(
            <>
            <h1>Something Went wrong...</h1>
            <h2>Please try again later</h2>
            </>
        )
      }else{
        return this.props.children
      }
      
  }
}
