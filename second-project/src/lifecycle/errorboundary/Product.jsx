import React from 'react'

const Product = (props) => {
    let{product}=props
    if(product=="mobile"){
        throw new Error("This product is not available")
    }
  return (
    <div>Product-{product}</div>
  )
}

export default Product