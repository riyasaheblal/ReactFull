import React, { Component } from 'react'

export default class ComponentB extends Component {

//! 3] unmounting phase
componentWillUnmount(){
    console.log("ComponentB componentWillUnmount")
}

  render() {
    return (
      <div>ComponentB</div>
    )
  }
}
