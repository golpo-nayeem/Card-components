import React from "react"

import star from '../images/start_53876-25533.webp'



export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location !== 0) {
        badgeText = "ONLINE"
    }
    return (
       
         <div className="card">
            { badgeText &&<div className="card--badge">{badgeText}</div>}
            <img className="card--image" src={props.img}/>
            <div className="card--stats">
                <img className="card--star-img" src={star} />
                <span>{props.rating}</span>
                <span className="gray">{props.reviewCount} </span>
                <span className="gray">{props.location}</span>   
            </div>
            <p className="card--p">{props.title}</p>
                <p className="card-p" ><span className="b">From {props.price}</span> / person</p>
        </div>
       
    )
}