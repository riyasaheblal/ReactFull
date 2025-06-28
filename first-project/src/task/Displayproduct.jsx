import React from 'react'
import Productdata from './product.json'
const Displayproduct = () => {
       console.log(Productdata);
       

  return (
  <section className='productcontainer'>
    {
    Productdata.map((value,index)=>{
      console.log(value);
      return(
      <div className="product" key={value.id}>
        
        <p className='productcat'>{value.category}</p>
       
        <img src={value.image} className='productimg'></img>
         <p className='producttitle'>{value.title}</p>
        <p className='productprice'>Rs. {value.price}</p>       
      </div>
      )
    })
}

  </section>
  )
}

export default Displayproduct