import React, { useContext } from 'react'
import { RoomContext } from "../context"
import Title from "./Title"

const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))]
}

export default function RoomFilter({ rooms }) {
  const context = useContext(RoomContext)
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context

  let types = getUnique(rooms, 'type');
  types = ['all', ...types]
  types = types.map((item, index) =>{
    return(
      <option key={index} value={item}>{item}</option>
    )
  })

  let capacities = getUnique(rooms, 'capacity')
  capacities = capacities.map((item, index) => {
    return(
      <option key={index} value={item}>{item}</option>
    )
  })

  return (
    <section className="filter-container">
      <Title title="search rooms"/>
      
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type"> room type</label>
          <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>{types}</select>
        </div>
        {/*end of select type */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>{capacities}</select>
        </div>

        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input id="price" type="range" min={minPrice} max={maxPrice} name="price" value={price} className="form-control" onChange={handleChange}/>

        </div>
      </form>
    </section>
  )
}
