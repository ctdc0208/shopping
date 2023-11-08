import React from "react";
import "./styles/Header.css"
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiMagnify } from '@mdi/js';
import { mdiCart } from '@mdi/js';


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
                <Link to="women" className="header-buttons" aria-current="page">
                    Women
                </Link>
                <Link to="men" className="header-buttons" aria-current="page">
                    Men
                </Link>
                <Link to="kids" className="header-buttons" aria-current="page">
                    Kids
                </Link>
                <Link to="accesories" className="header-buttons" aria-current="page">
                    Accessories
                </Link>
            </div>
            <Link to="/" className="main-header-logo" aria-current="page">
                Shopping
            </Link>
            <div className="main-header-second">
                <button className="display-flex-row align-center">
                    <div>Search</div>
                    <Icon 
                        path={mdiMagnify}
                        size={1.5}
                        color="var(--main-color)"
                        className="margin-left"
                    />
                </button>
                <button>
                    <Icon 
                        path={mdiCart}
                        size={1.5}
                        color="var(--main-color)"
                    />
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