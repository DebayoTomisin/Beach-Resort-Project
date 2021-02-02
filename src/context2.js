import React, { useState, useContext, useEffect } from "react"
import items from "./data"

const AppContext = React.createContext()

export function RoomProv({children}){

  const [rooms, setRooms] = useState([])
  const [sortedRooms, setSortedRooms] = useState([])
  const [featuredRooms, setFeaturedRooms] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
   let rooms = formatData(items)
   let featuredRooms = rooms.filter(room => room.fields.featured === true)
   setRooms(rooms)
   setFeaturedRooms(featuredRooms)
   setSortedRooms(rooms)
   setLoading(false)
  }, [items])

  const formatData = (items) =>{
    let tempItems = items.map(item =>{
      let id = item.sys.id
      let images = item.fields.images.map(img => img.fields.file.url)
      let room = {...items.fields, images, id}
      return room
    })
    return tempItems
  }

  const getRoom = (slug) => {
    let tempRooms = [...rooms]
    const room = tempRooms.find((room) => room.slug === slug)
    return room
  }

 return <AppContext.Provider value={{
   rooms,
   sortedRooms,
   featuredRooms,
   loading,
   getRoom
 }}>
   {children}
 </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}