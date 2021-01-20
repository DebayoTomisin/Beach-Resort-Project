import React from 'react'
import {Link} from 'react-router-dom'

import Banner from "../components/Banner"
import Hero from '../components/Hero'
import Services from "../components/Services"

const Home = () => {
    return(
        <>
            <Hero> 
                <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $499">
                    <Link to='/rooms' className="btn-primary">our rooms</Link>
                </Banner>
            </Hero>
            <Services/>
        </>
        
        
    )
}

export default Home
