import React from 'react'
import { createPortal } from 'react-dom'

const Modal = (props) => {
    let{open,setOpen}=props //destructed
    if(open === false){
        return null
    }

    //!createPortal(children,domnode) written just beside return keyword
  return createPortal (
    <>
    <h2>Hello Riya</h2>
    <h3>We are Learing DOM NODE of <b>PORTAL</b> </h3>
    <button onClick={()=>setOpen(false)}>Close button</button>
    </>,document.getElementById("portal")
  )
}

export default Modal