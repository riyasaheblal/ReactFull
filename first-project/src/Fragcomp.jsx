import React, { Fragment } from "react"

const Fragcomp=()=>{
    return(

        //! First Way
        // <React.Fragment>
//   <h1>Fragment it is uded to avoid uneccassery nodesin Dom.</h1>
//         <h2>you cannot use any props except one i.e key prop</h2> 
               // </React.Fragment>

        //!Second Way
        // <Fragment>
//   <h1>Fragment it is uded to avoid uneccassery nodesin Dom.</h1>
//         <h2>you cannot use any props except one i.e key prop</h2>       
//  // </Fragment>


//! 3 way
        <>
        <h1>Fragment it is uded to avoid uneccassery nodesin Dom.</h1>
        <h2>you cannot use any props</h2>
        </>
    )
}


export default Fragcomp