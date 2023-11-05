import React from "react";
import "./Main.css";

function BoxShop() {
    return (
        <>
            <div className="box-bg-1 background-center">
                <div className="shop-now-container">
                    <button className="shop-now">Shop Women</button>
                </div>
            </div>
            <div className="box-bg-2 background-center">
                <div className="shop-now-container">
                    <button className="shop-now">Shop Men</button>
                </div>
            </div>
            <div className="box-bg-3 background-center">
                <div className="shop-now-container">
                    <button className="shop-now">Shop Kids</button>
                </div>
            </div>
            <div className="box-bg-4 background-center">
                <div className="shop-now-container">
                    <button className="shop-now">Shop Accesories</button>
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