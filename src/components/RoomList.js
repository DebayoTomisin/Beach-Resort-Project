import React from 'react'
import Room from "./Room"

export default function RoomList({rooms}) {

  if(rooms.length === 0){
    return(
      <div className="empty-search">
        <h3>No rooms matched your search parameters</h3>
      </div>
    )
  }
  return (
    <section className="roomslist">
      <div className="roomlist-center">
        {
          rooms.map(room => {
            return(
              <Room key={room.id} room={room}/>
            )
          })
        }
      </div>
    </section>
  )
}
