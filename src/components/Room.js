import React from "react" 
import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import defaultImg from "../images/defaultBcg.jpeg"
import {useGlobalContext} from "../context2"
export default function Room({ room }){
  const {name, slug, images, price} = room
  
  return(
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt ="single room image"/>
        <div className="price">
          <h6>{price}</h6>
          <p> per night</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">Features</Link>
      </div>
      <p className="rooms-info">{name}</p>
    </article>
  )
}

Room.propTypes = {room: PropTypes.shape({
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.number.isRequired
})}