import React from "react";
import "./styles/Header.css"
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiMagnify } from '@mdi/js';
import Cart from "./Cart";


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
                <Link to="women's clothing" className="header-buttons" aria-current="page">
                    Women
                </Link>
                <Link to="men's clothing" className="header-buttons" aria-current="page">
                    Men
                </Link>
                <Link to="jewelery" className="header-buttons" aria-current="page">
                    Jewelery
                </Link>
                <Link to="electronics" className="header-buttons" aria-current="page">
                    Electronics
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
                    <Cart />
            </div>
        </div>
    )
}

class Header extends React.Component {    
    render() {
        return (
            <div className="sticky-header">
                <Discount />
                <MainHeader />
            </div>
        )
    }
};


export default Header