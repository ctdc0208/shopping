import React from "react";
import "./Header.css"

class Header extends React.Component {    
    render() {
        return (
            <div>
                <header>
                    <div className="first-header-wrapper">
                        <div className="first-header-contained">
                            <div className="first-header-flex">
                                <div className="nav-item">Help</div>
                                <div className="nav-item">Store Locator</div>
                                <div className="nav-item">English</div>
                            </div>
                        </div>
                    </div>
                </header>
                <nav className="navbar">
                    <div className="header-container">
                        <div className="flex-start">
                            <button className="logo">
                            ユニクロ｜UNIQLO
                            </button>
                            <button className="categories">MEN</button>
                            <button className="categories">WOMEN</button>
                            <button className="categories">KIDS</button>
                        </div>
                        <div className="float-right">
                            <div className="search-container">
                                <input className="search-bar" type="text" placeholder="Search by keyword" />
                                <button class="search-button"></button>
                            </div>
                            <button>Cart</button>
                        </div>
                    </div>
                </nav>
            </div>
           
        )
    }
};


export default Header