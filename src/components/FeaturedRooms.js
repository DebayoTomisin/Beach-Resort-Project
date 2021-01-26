import React, { Component } from "react"
import {RoomContext} from "../context"

class FeaturedRooms extends Component {
  
  constructor(props){
    super(props)
    this.state ={
      
    }
  }

  static contextType = RoomContext

  render(){
    return(
      <div>Hello from featured rooms</div>
    )
  }
}

export default FeaturedRooms
