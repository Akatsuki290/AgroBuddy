import React from 'react';
import logo from "./mainlogo.png";
import "./Header.css"
function Header() {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="" />
                <h1>AgroBuddy</h1>
            </div>
        </div>
    )
}
export default Header;
