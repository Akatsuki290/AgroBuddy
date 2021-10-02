import React from 'react';
import "./Menu.css";
import border from "./plantb.png"
import Card from "./Card.js";
function Menu() {
    return (
        <div className="Menu-main">
           <h1>Our services</h1>
                    <div className="Menu">
            <Card name="crop prediction" img="https://img.icons8.com/color/96/000000/growing-plant.png" />
            <Card name="Disease prediction" img ="https://img.icons8.com/external-justicon-lineal-color-justicon/100/000000/external-pesticide-farming-and-gardening-justicon-lineal-color-justicon.png" />
            <Card name="Infopedia" img="https://img.icons8.com/fluency/96/000000/green-earth.png"/>
            <Card name="market" img="https://img.icons8.com/color/96/000000/tractor.png"/>
        </div></div>
    )
}

export default Menu
