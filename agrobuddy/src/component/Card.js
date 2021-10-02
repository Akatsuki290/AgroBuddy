import React from 'react'
import logo from "./mainlogo.png"
function Card(props) {
    return (
        <div className="Card">
            <img src={props.img} alt="" />
            <h1>{props.name}</h1>
            <button> click me</button>
        </div>
    )
}

export default Card
