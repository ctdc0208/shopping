import React from "react";
import "./styles/Shop.css";
import Icon from "@mdi/react";
import { mdiCircleOutline } from "@mdi/js";
import { mdiStar } from "@mdi/js";
import { mdiStarHalfFull } from '@mdi/js';
import { mdiStarOutline } from '@mdi/js';

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
        <div className="shop-card-container">
            <div className="shop-card-image background-center aspect-ratio-1-1"></div>
            <div>
                <div className="item-title">Womens Shoes</div>
            </div>
            <div className="item-rating-container">
                <div className="item-rating-stars">
                    <Icon path={mdiStar}
                        size={0.8}
                        color="#fdb600"
                    />
                    <Icon path={mdiStar}
                        size={0.8}
                        color="#fdb600"
                    />
                    <Icon path={mdiStar}
                        size={0.8}
                        color="#fdb600"
                    />
                    <Icon path={mdiStarHalfFull}
                        size={0.8}
                        color="#fdb600"
                    />
                    <Icon path={mdiStarOutline}
                        size={0.8}
                        color="#fdb600"
                    />
                </div>
                <div className="item-rating-number">(53)</div>
            </div>
            <div className="item-price">$190.00 USD</div>
        </div>
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