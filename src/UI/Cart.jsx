import React, { useState } from "react";
import "./styles/Cart.css";
import Icon from "@mdi/react";
import { mdiCart } from '@mdi/js';
import { mdiClose } from '@mdi/js';
import { mdiDeleteOutline } from '@mdi/js';
import { mdiPlusBox } from '@mdi/js';
import { mdiMinusBox } from '@mdi/js';
import { getCartData } from "../Data";

const PrintCartData = () => {
    const { cartData, setCartData } = getCartData();
    const [ currentQuantity, setCurrentQuantity] = useState(cartData.currentQuantity);
    const quantityNumber = Number(currentQuantity);    

    console.log(cartData)
    
    return (
        <>
            {cartData.map((items, index) => 
                <div key={index}>
                {items.map((items) => {
                    const preventMinus = (e) => {
                        if (e.code === 'Minus') {
                            e.preventDefault();
                        }
                    };
        
                    const preventPasteNegative = (e) => {
                        const clipboardData = e.clipboardData || window.clipboardData;
                        const pastedData = parseFloat(clipboardData.getData('text'));
                    
                        if (pastedData < 0) {
                            e.preventDefault();
                        }
                    };
                    
                    let cartImageUrl = items.product.image
        
                    return (
                        <div className="cart-item-container"  key={items.product.id}>
                            <div className="aspect-ratio-1-1 background-center cart-item-image"
                                style={{
                                    backgroundImage: `url(`+ cartImageUrl + `)`,
                                    backgroundSize: `contain`,
                                }}>
                            </div>
                            <div className="cart-items-title-container">
                                <div className="cart-item-title-category-container">
                                    <div className="cart-item-title">
                                        {items.product.title}
                                    </div>
                                    <div className="cart-item-category">
                                        {items.product.category}
                                    </div>
                                </div>
                                <button className="delete-cart-item"><Icon path={mdiDeleteOutline} size={1}/></button>
                            </div>
                            <div className="cart-price-quantity-container">
                                <div className="quantity-button-container">
                                    <button onClick={() => setCurrentQuantity(Math.max(quantityNumber - 1, 1))}><Icon path={mdiMinusBox} size={1} color="var(--main-color)"/></button>
                                    <input className="quantity-input" value={currentQuantity} onChange={e => setCurrentQuantity(e.target.value)} type="number" min={1} onPaste={preventPasteNegative} onKeyPress={preventMinus}></input>
                                    <button onClick={() => setCurrentQuantity(quantityNumber + 1)}><Icon path={mdiPlusBox} size={1} color="var(--main-color)"/></button>
                                </div>
                                <div className="cart-item-price">$ {items.product.price}</div>
                            </div>
                        </div>
                    )
                })}
                </div>
            )}
        </>
    )
}


function Cart() {
    const [sidebar, setSidebar] = useState(true); // testing cart
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <div>
                <div className='cart'>
                    <div onClick={showSidebar}>
                        <Icon 
                            path={mdiCart}
                            size={1.5}
                            color="var(--main-color)"
                        />
                    </div>
                </div>
            <div className={sidebar ? 'cart-menu active ' : 'cart-menu'}>
                <div className="opacity" onClick={showSidebar}>
                </div>
                <div className='cart-container'>
                
                        <div className='cart-header'>
                            <div className="cart-title">Your Cart</div>
                            <button  onClick={showSidebar}><Icon path={mdiClose} size={1}/></button>
                        </div>
                        <div className='cart-content'>
                            {/* <div className="cart-empty">Your Cart is Empty</div>
                            <div className="cart-shop-container">
                                <div className="cart-shop-description">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                </div>
                                <Link to="women's clothing" aria-current="page" >Shop Women</Link>
                                <Link to="men's clothing" aria-current="page" >Shop Men</Link>
                                <Link to="jewelery" aria-current="page">Shop Jewelery</Link>
                                <Link to="electronics" aria-current="page" >Shop Electronics</Link>
                            </div> */}
                            <PrintCartData className="cart-content-items" />
                        </div>
                        <div className="checkout-container">
                            <div className="subtotal-container">
                                <div>Subtotal</div>
                                <div>Subtotal Price</div>
                            </div>
                            <button className="checkout-button">Checkout</button>
                        </div>
                </div>
            </div>
            </div>
        </>
    )
};

export default Cart;