const Defaultcomp=(props)=>{
    console.log(props)   //{team: 'MI', captain: 'Hardik', trophy: 5}
       let{team, captain, trophy}=props       //destructing

       //1 way
   // let{team= "Punjab Kings", captain= "Not yet decided", trophy="Loading.."}=props     //destructing 1 way
    return(
        <>
<h1>IPL TEAM</h1>


//2 way
<h4>Team Name:{team || "Gujrat"}</h4>
<h4>Team Captain:{captain || "Not yet decided"}</h4>
<h4>Team Trop:{trophy || "1oading.."}</h4>
        </>
    )
}

export default Defaultcomp