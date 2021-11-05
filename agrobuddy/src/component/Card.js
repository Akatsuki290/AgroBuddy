import React from 'react'
function Card(props) {
    return (
        <div className="Card">
            <img src={props.img} alt="" />
            <h1>{props.name}</h1>
           <a href={props.link}> <button> click me</button></a>
        </div>
    )
}

export default Card
