import React, {Component } from "react"
import items from "./data"

const RoomContext = React.createContext()

class RoomProvider extends Component {
  constructor(props){
    super(props)
    this.state = {
      rooms: [],
      sortedRooms : [],
      featuredRooms: [],
      loading: true
    }
    
  }

  componentDidMount(){
    let rooms = this.formatData(items)
    console.log(rooms)

  }

  formatData(items){
    let tempItems = items.map(item => {
      let id = item.sys.id
      let images = item.fields.images.map(img => img.fields.file.url)
      let room = {...item.fields, images, id}
      return room
    })
    return tempItems
  }

  render(){
    return(
      <RoomContext.Provider value="hello">{this.props.children}</RoomContext.Provider>
    )
  }
}

const RoomConsumer = RoomContext.Consumer

export { RoomProvider, RoomContext, RoomConsumer }