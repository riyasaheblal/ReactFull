import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'

const DisplayProduct = () => {


    //Using ASYNC AND AWAIT key

    //! state store array muplie data we use map()
    let[products,setProducts]=useState([])


    async function getData(){
      //  let response= await axios.get("https://fakestoreapi.com/products")
      //  console.log(response);
      //  let{data}=response

      let{data}=await axios.get("https://fakestoreapi.com/products")
      setProducts(data)    //!stored fetched data in state
       
    }


    //!useEffect will render after component
    useEffect(()=>{
     getData()

    },[])

    
  return (
   <>
   {
    products.map((value,index)=>{
      return(
      <Fragment key={value.id}>
        <h2>{value.title}</h2>
        <img src={value.image} alt="" />
        <span style={{color:"red"}}>{value.price}RS</span>
      </Fragment>
      )
    })
   }
   </>
  )
}

export default DisplayProduct