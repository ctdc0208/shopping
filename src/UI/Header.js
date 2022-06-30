import React from "react";
import "./Header.css"

class Header extends React.Component {    
    render() {
        return (
            <div className="header-container">
                <button className="header">
                    UNIQLO
                </button>
                <div>
                    <button className="categories">MEN</button>
                    <button className="categories">WOMEN</button>
                    <button className="categories">KIDS</button>
                </div>
            </div>
        )
    }
};


export default Header