import React from "react";
import "./Ui.css"

class Header extends React.Component {    
    render() {
        return (
            <div className="header-container">
                <button className="header">
                    SHOPPING
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