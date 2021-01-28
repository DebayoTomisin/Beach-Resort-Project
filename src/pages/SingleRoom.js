import React, { Component } from 'react'
import defaultBcg from "../images/room-11.jpeg"
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import {Link} from "react-router-dom"
import {RoomContext} from "../context"

class SingleRoom extends Component {
  constructor(props){
    super(props)
    console.log(this.props)
  }

  componentDidMount(){

  }

  render(){
    return(
        <div>
          Hello from Single room page
        </div>
    )
  }
}

export default SingleRoom