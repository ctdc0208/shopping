import React from "react";
import "./Header.css"

function Discount() {
    return (
        <div className="discount-container">
            <div className="discount-text">Free Shipping Over $60 USD</div>
        </div>
    )
}

function MainHeader() {
    return (
        <div className="main-header-container">
            <div className="main-header-first">
                <button className="header-buttons">
                    Women
                </button>
                <button className="header-buttons">
                    Men
                </button>
                <button className="header-buttons">
                    Kids
                </button>
                <button className="header-buttons">
                    Accessories
                </button>
            </div>
            <div className="main-header-logo">
                Shopping
            </div>
            <div className="main-header-second">
                <button>
                    Search
                </button>
                <button>
                    Cart
                </button>
            </div>
        </div>
    )
}

class Header extends React.Component {    
    render() {
        return (
            <div>
                <Discount />
                <MainHeader />
                {/* <header>
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
                                <button className="search-button"></button>
                            </div>
                            <button>Cart</button>
                        </div>
                    </div>
                </nav> */}
            </div>
           
        )
    }
};


export default Header