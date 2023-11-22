import React from "react";
import "./styles/Product.css"

const productData = [
    {
        "id": 2,
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 22.3,
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "rating": {
            "rate": 4.1,
            "count": 259
        }
    }
]

console.log(productData)

function ProductPage() {
    const printProduct = productData.map((product) => {
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
                        <div>{product.rating.rate}</div>
                        <div>{product.rating.count}</div>
                    </div>
                    <div className="product-price">$ {product.price}</div>
                    <div className="product-description">{product.description}</div>
                </div>
            </div>
        )
    })
    return (
        <>{printProduct}</>
    )
}

function Product() {
    return (
        <>
            <ProductPage />
        </>
    )
};

export default Product;