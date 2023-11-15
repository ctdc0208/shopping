import React from "react";
import "./styles/Shop.css";
import Icon from "@mdi/react";
import { mdiCircleOutline } from "@mdi/js";
import { mdiStar } from "@mdi/js";
import { mdiStarHalfFull } from '@mdi/js';
import { mdiStarOutline } from '@mdi/js';
import { getDataWomen } from "../Data";

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
    const { products, error, loading } = getDataWomen();
    if (error) return <p>A network error was encountered</p>;
    if (loading) return <p>Loading...</p>;
    
    const printItems = products.map((items) => {
        let bgImageUrl = items.image
        let styles = {
                backgroundImage: 'url(' + bgImageUrl + ')',
        }
        console.log(styles)
        return (
                <div className="shop-card-container"  key={items.id}>
                <div className="aspect-ratio-1-1 background-center"
                    style={{
                        backgroundImage: `url(`+ bgImageUrl + `)`,
                        backgroundSize: `contain`,
                    }}>
                </div>
                <div>
                    <div className="item-title">{items.title}</div>
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
                    <div className="item-rating-number">({items.rating.count})</div>
                </div>
                <div className="item-price">{items.price} USD</div>
                </div>
        );
    })
    return (
        <>{printItems}</>
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