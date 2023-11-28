import React, { useState } from "react";
import Icon from "@mdi/react";
import { mdiCart } from '@mdi/js';
import { mdiClose } from '@mdi/js';
import "./styles/Cart.css";
import { Link } from "react-router-dom";

export const cartData = [null]

function Cart() {
    const [sidebar, setSidebar] = useState(false);

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
                <div className="opacity">
                </div>
                <div className='cart-container'>
                    
                        <div className='cart-header'>
                            <div className="cart-title">Your Cart</div>
                            <button  onClick={showSidebar}><Icon path={mdiClose} size={1}/></button>
                        </div>
                        <div className='cart-content'>
                            <div className="cart-empty">Your Cart is Empty</div>
                            <div className="cart-shop-container">
                                <div className="cart-shop-description">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                </div>
                                <Link to="women's clothing" aria-current="page" >Shop Women</Link>
                                <Link to="men's clothing" aria-current="page" >Shop Men</Link>
                                <Link to="jewelery" aria-current="page">Shop Jewelery</Link>
                                <Link to="electronics" aria-current="page" >Shop Electronics</Link>
                            </div>
                        </div>
                </div>
            </div>
            </div>
        </>
    )
};

export default Cart;