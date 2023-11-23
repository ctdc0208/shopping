import React from "react";
import "./styles/Main.css";
import { Link } from "react-router-dom";

function BoxShop() {
    return (
        <>
            <div className="box-bg-1 background-center">
                <div className="shop-now-container">
                    <Link to="women's clothing" aria-current="page" className="shop-now">Shop Women</Link>
                </div>
            </div>
            <div className="box-bg-2 background-center">
                <div className="shop-now-container">
                    <Link to="men's clothing" aria-current="page" className="shop-now">Shop Men</Link>
                </div>
            </div>
            <div className="box-bg-3 background-center">
                <div className="shop-now-container">
                    <Link to="jewelery" aria-current="page" className="shop-now">Shop Jewelery</Link>
                </div>
            </div>
            <div className="box-bg-4 background-center">
                <div className="shop-now-container">
                    <Link to="electronics" aria-current="page" className="shop-now">Shop Electronics</Link>
                </div>
            </div>
        </>
    )
}

class Home extends React.Component {
    render() {
        return (
            <div className="home-container">
                <div className="main-product-bg center">
                    <div className="gradient-left">
                        <div className="main-product-text">
                        Lorem ipsum dolor sit amet
                        </div>
                    </div>
                </div>
                <div className="main-qoute">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sequi fugit molestiae ut. Sit dolores nihil delectus omnis, optio quibusdam, corporis accusamus explicabo id eaque numquam in nulla temporibus saepe."
                </div>
                <div className="main-shop-container">
                    <BoxShop/>
                </div>
            </div>
        )
    }
};

export default Home;