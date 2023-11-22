import React from "react";
import { Link } from "react-router-dom";
import "./styles/Shop.css";
import Icon from "@mdi/react";
import { mdiCircleOutline } from "@mdi/js";
import { mdiStar } from "@mdi/js";
import { mdiStarHalfFull } from '@mdi/js';
import { mdiStarOutline } from '@mdi/js';
import  getData from "../Data";
import { useParams } from "react-router-dom";
import Home from "./Home.jsx";

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


function ShopCard({category}) {
    const categoryUrl = `https://fakestoreapi.com/products/category/${category}`
    const { products, error, loading } = getData(categoryUrl);
    if (error) return <p>A network error was encountered</p>;
    if (loading) return <p>Loading...</p>;
    
    const printItems = products.map((items) => {
        let bgImageUrl = items.image
        // console.log(items)
        return (
                <Link to={items.title}  style={{ color: 'inherit', textDecoration: 'inherit'}} className="shop-card-container"  key={items.id}>
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
                </Link>
        );
    })
    return (
        <>{printItems}</>
    )
}

const Shop = ({category}) => {
    return (
        <div className="shop-container">
            <div className="shop-label capitalize-text">Shop {category}</div>
            <div className="shop-grid">
                <div className="shop-main-bg">
                    <div className="gradient-bottom flex-end">
                        <div className="shop-main-bg-text">Cozy</div>
                    </div>
                </div>
               <ShopCard 
               category={category}
               />
            </div>
        </div>
    )
}

function GetCategory({category}) {
        return (
            <>
            <div className="shop-first-bg justify-center">
                <div className="shop-first-text text-center text-border-black">
                    Shop {category}
                </div>
            </div>
            <div className="shop-main">
                <ShopNavbar />
                <Shop 
                category={category}
                />
            </div>
        </>
    );
}

const PrintWomen = () => {
    return (
        <GetCategory category="women's clothing"/>
    )
}

const PrintMen = () => {
    return (
        <GetCategory category="men's clothing"/>
    )
}

const PrintJewelery = () => {
    return (
        <GetCategory category="jewelery"/>
    )
}

const PrintElectronics = () => {
    return (
        <GetCategory category="electronics"/>
    )
}


const Category = () => {
    let { categories } = useParams();
    return (
        <>
            { categories === "women's clothing" ? (
                <PrintWomen />
            ) 
            : categories === "men's clothing" ? (
                <PrintMen />
            ) : categories === "jewelery" ? (
                <PrintJewelery />
            ) : categories === "electronics" ? (
                <PrintElectronics />
            ) 
            : (
                <Home />
            )}
        </>
)};



export default Category;