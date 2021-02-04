import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import { RoomConsumer } from "../context"
import Loading from "./Loading"

export default function RoomsContainer() {
  return (
    //instead of using this method, higher order components can be used as found in the cotext.js file
    <RoomConsumer>
      {
        (value) => {
          const { loading, sortedRooms, rooms} = value
          if(loading){
            return <Loading/>
          }
          return(
            <div>
              <RoomFilter rooms={rooms}/>
              <RoomList rooms={sortedRooms}/>
            </div>
          )
        }
      }
    </RoomConsumer>
    
  )
}
