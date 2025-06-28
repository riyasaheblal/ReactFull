import React from 'react'
import { Outlet } from 'react-router-dom'

const Post = () => {
  return (
    <>
    <h2>Post</h2>
    <Outlet/>
    </>
  )
}

export default Post