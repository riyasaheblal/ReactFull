import React, { useState } from 'react'

const Firststate = () => {

  //String
    let[fruit,setFruit]=useState("Apple");
    console.log(fruit);

    // First way
    let changeFruit=()=>{
        setFruit("Banana")
    }
    let[sport,setSport]=useState("Hockey")

    //Boolean
    let[online,setOnline]=useState(true)
    //array
    let[arr,setArr]=useState([1,2,3])
    //OBJECT
    let[movie,setMovie]=useState(
      {
        movieName:"Pushpa",
        moviePart:"1",
        movieLanguage:"Hindi"
      }
    )

   let{movieName,moviePart,movieLanguage}=movie   //destructed
  let changeMovie=()=>{
    setMovie({movieName:"Kung fu",
        moviePart:"2",
        movieLanguage:"Korea"})
  }
  return (
    <>
    <h2>States</h2>
    <h2>Fruit:{fruit}</h2>
    <button onClick={changeFruit}>Change Fruit</button>
    <h2>Sport:{sport}</h2>
    {/* //2 way to call */}
    <button onClick={()=>{setSport("FootBall")}}>ChangeButton</button>
    <h2>I am found of this movie {movieName} i watched part {moviePart} and its in {movieLanguage} language</h2>
    <button onClick={changeMovie}>change movie</button>
    </>
  )
}

export default Firststate