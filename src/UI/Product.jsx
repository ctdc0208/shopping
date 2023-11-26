import React, { useState, useEffect } from "react";
import "./styles/Product.css"
import { useParams } from "react-router-dom";
import { cartData } from "./Cart";
import { StarsRating } from "./Category";

function getProductData(productUrl){
    const [ product, setProduct ] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(productUrl)
        .then((response) => {
            if (response.status >= 400) {
                throw new Error("server error");
              }
              return response.json();
            })
        .then((response) => setProduct(response))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }, [])

    return { product, error, loading }
}  

function ProductPage({productId}) {
    const [state, setState] = useState(cartData ?? [{}])
    const handleClick = () => {
        setState([...state, product]);
      };

      useEffect(() => {
        console.log(state);
      }, [state]);

    const productUrl = `https://fakestoreapi.com/products/${productId}`
    const { product, error, loading } = getProductData(productUrl);
    if (error) return <p>A network error was encountered</p>;
    if (loading) return <p>Loading...</p>;

    let bgImageUrl = product.image
    return (
        <div className="product-page-container" key={product.id}>
            <div className="aspect-ratio-1-1 background-center"
                style={{
                    backgroundImage: `url(`+ bgImageUrl + `)`,
                    backgroundSize: `contain`,
                }}
            >
            </div>
            <div className="product-content">
                <div className="capitalize-text font-gray ">{product.category}</div>
                <div className="product-title ">{product.title}</div>
                <div className="product-rating-container">
                    <StarsRating rating={product.rating.rate} />
                    <div>{product.rating.count}</div>
                </div>
                <div className="product-price">$ {product.price}</div>
                <div className="product-description">{product.description}</div>
                <button onClick={handleClick}>Submit</button>
            </div>
        </div>
    )
}

const PrintOne = () => {
    return (
        <ProductPage productId="1"/>
    )
}

const PrintTwo = () => {
    return (
        <ProductPage productId="2"/>
    )
}

const PrintThree = () => {
    return (
        <ProductPage productId="3"/>
    )
}

const PrintFour = () => {
    return (
        <ProductPage productId="4"/>
    )
}

const PrintFive = () => {
    return (
        <ProductPage productId="5"/>
    )
}

const PrintSix = () => {
    return (
        <ProductPage productId="6"/>
    )
}

const PrintSeven = () => {
    return (
        <ProductPage productId="7"/>
    )
}

const PrintEight = () => {
    return (
        <ProductPage productId="8"/>
    )
}

const PrintNine = () => {
    return (
        <ProductPage productId="9"/>
    )
}

const PrintTen = () => {
    return (
        <ProductPage productId="10"/>
    )
}

const PrintEleven = () => {
    return (
        <ProductPage productId="11"/>
    )
}

const PrintTwelve = () => {
    return (
        <ProductPage productId="12"/>
    )
}

const PrintThirteen = () => {
    return (
        <ProductPage productId="13"/>
    )
}

const PrintFourteen = () => {
    return (
        <ProductPage productId="14"/>
    )
}

const PrintFifteen = () => {
    return (
        <ProductPage productId="15"/>
    )
}

const PrintSixteen = () => {
    return (
        <ProductPage productId="16"/>
    )
}

const PrintSeventeen = () => {
    return (
        <ProductPage productId="17"/>
    )
}

const PrintEighteen = () => {
    return (
        <ProductPage productId="18"/>
    )
}

const PrintNineteen = () => {
    return (
        <ProductPage productId="19"/>
    )
}

const PrintTwenty = () => {
    return (
        <ProductPage productId="20"/>
    )
}

function Product() {
    let { product } = useParams();
    return (
        <>
            { product === "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops" ? (
                <PrintOne />
            ) 
            : product === "Mens Casual Premium Slim Fit T-Shirts" ? (
                <PrintTwo />
            ) : product === "Mens Cotton Jacket" ? (
                <PrintThree />
            ) : product === "Mens Casual Slim Fit" ? (
                <PrintFour />
            ) : product === "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet" ? (
                <PrintFive />
            ) : product === "Solid Gold Petite Micropave" ? (
                <PrintSix />
            ) : product === "White Gold Plated Princess" ? (
                <PrintSeven />
            ) : product === "Pierced Owl Rose Gold Plated Stainless Steel Double" ? (
                <PrintEight />
            ) : product === "WD 2TB Elements Portable External Hard Drive - USB 3.0" ? (
                <PrintNine />
            ) : product === "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s" ? (
                <PrintTen />
            ) : product === "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5" ? (
                <PrintEleven />
            ) : product === "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive" ? (
                <PrintTwelve />
            ) : product === "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin" ? (
                <PrintThirteen />
            ) : product === "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED" ? (
                <PrintFourteen />
            ) : product === "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats" ? (
                <PrintFifteen />
            ) : product === "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket" ? (
                <PrintSixteen />
            ) : product === "Rain Jacket Women Windbreaker Striped Climbing Raincoats" ? (
                <PrintSeventeen />
            ) : product === "MBJ Women's Solid Short Sleeve Boat Neck V" ? (
                <PrintEighteen />
            ) : product === "Opna Women's Short Sleeve Moisture" ? (
                <PrintNineteen />
            ) : product === "DANVOUY Womens T Shirt Casual Cotton Short" ? (
                <PrintTwenty />
            )
            : (
                <Outlet />
            )}
        </>
    )
};

export default Product;