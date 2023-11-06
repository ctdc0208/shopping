import React from "react";
import "./styles/Shop.css";
import Icon from "@mdi/react";
import { mdiCircleOutline } from "@mdi/js";

function ShopNavbar() {
    return (
        <div className="filter-container">
            <div className="filter-label">Filter</div>
            <div className="sort-container">
                <div className="sort-label">Sort By</div>
                    <button>
                        <Icon path={mdiCircleOutline} size={1} />
                        <div className="sort-button-label">Price: Low to High</div>
                    </button>
                    <button>
                        <Icon path={mdiCircleOutline} size={1} />
                        <div className="sort-button-label">Price: High to Low</div>
                    </button>
            </div>
        </div>
    )
}

function ShopCard() {
    return(
        <div>Items</div>
    )
}

function Shop() {
    return (
        <div className="shop-container">
            <div className="shop-label">Shop Women</div>
            <div className="shop-grid">
                <div className="shop-main-bg">
                    <div className="gradient-bottom flex-end">
                        <div className="shop-main-bg-text">Cozy</div>
                    </div>
                </div>
               <ShopCard />
               <ShopCard />
               <ShopCard />
               <ShopCard />
            </div>
        </div>
    )
}

class Women extends React.Component {
    render() {
        return (
        <>
            <div className="shop-first-bg justify-center">
                <div className="shop-first-text text-center text-border-black">
                    Shop Women
                </div>
            </div>
            <div className="shop-main">
                <ShopNavbar />
                <Shop />
            </div>
        </>
        )
    }
};

export default Women;