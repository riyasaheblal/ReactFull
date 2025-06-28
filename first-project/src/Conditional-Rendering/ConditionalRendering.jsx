import React from 'react'
import Rcb from './Rcb'
import Pkb from './Pkb'

const ConditionalRendering = () => {
    let online = true
    let city = "Pune"
    // let age=30

    let result = "Winner"


    //!Switch true and city mumbai
    switch (true) {
        case online && city == "Pune":
            return (
                <>
                    <h2>You are in Pune</h2>
                </>
            )

        case online && city == "mumbai":
            return (
                <>
                    <h2>You are in Mumbai</h2>
                </>
            )

        case online && city == "Hydrebad":
            return (
                <>
                    <h2>You are in Hydrebad</h2>
                </>
            )

        default:
            return (
                <>
                    <h2>You are in my heart</h2>
                </>
            )

    }


    //!Rendering Component based on condition
    // return(
    //     <>
    //     <h2> {result=="Winner" ? <Rcb/>:<Pkb/>}</h2>
    //     </>
    // )


    //!short circuting : insidejsx{}=> expression used,terinary(condition && statement) display only condition is true or else ignored
    // return(
    //     <>
    //     <h2>{age>18 && "Eligible for voting"}</h2>
    //     </>
    // )

    //!Switch
    //    switch(city){
    //  case "mumbai":
    //     return(
    //         <>
    //         <h2>Mumbai</h2>
    //           <h2>Vada pav</h2>
    //         </>
    //     )
    //     case "Pune":
    //     return(
    //         <>
    //         <h2>Pune</h2>
    //           <h2>Misal pav</h2>
    //         </>
    //     )
    //     case "Hydrebad":
    //     return(
    //         <>
    //         <h2>Hydrebad</h2>
    //           <h2>Briyani</h2>
    //         </>
    //     )
    //     default:
    //          return(
    //         <>
    //         <h2>No content</h2>
    //         </>
    //     )
    //    }




    //!else-if
    // if(city=="pune"){
    //     return (
    //         <h2>Yes you are in pune</h2>
    //     )
    // } else if(city=="mumbai"){
    //     return (
    //         <h2>Yes you are at mumbai</h2>
    //     )
    // }else{
    //     return (
    //         <h2>No city</h2>
    //     )
    // }



    //!if-esle
    // if(online){
    //     return (
    //         <h2>Welcome to class</h2>
    //     )
    // }else{
    // return (
    //         <h2>No content</h2>
    //     )
    // }


    //   return (
    //    <>
    //    //!ternary Operator
    //    <h2>{online? "Welcome to class" : "No content"}</h2>
    //    </>
    //   )
}

export default ConditionalRendering