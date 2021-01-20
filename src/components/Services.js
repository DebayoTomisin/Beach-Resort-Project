import React, { Component } from "react"
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa"

import Title from './Title'

class Services extends Component {
    
    constructor(props){
        super(props)
        this.state= {
            services : [{
                icon : <FaCocktail/>,
                title: "Free Cocktails",
                info: "We offer free cocktails to our customers on deluxe upwards plans as a service on the house"
            },
            {
                icon : <FaHiking/>,
                title: "Endless hiking",
                info: "Hidden in nature, we have mountains and professional guards who will assist you in your hiking travails, all day, everyday!"
            },
            {
                icon : <FaShuttleVan/>,
                title: "Free shuttle",
                info: "We also offer free shuttle to anywhere in the resort, we know we have huge facilities hence the need to move around"
            },
            {
                icon : <FaBeer/>,
                title: "Strongest beer",
                info: "You drink? we have the strongest beer around"
            }]
        }
    }

    render(){
        return(
            <section className="services">
                <Title title="services"/>
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return(
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
        )
    }

}

export default Services