import React, { useState } from "react";
import Icon from "@mdi/react";
import { mdiCart } from '@mdi/js';
import "./styles/Cart.css";

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
                    <li className='cart-toggle'>
                        <a  onClick={showSidebar}>Close</a>
                    </li>
                    <li className='cart-content'>Contents</li>
                </div>
            </div>
            </div>
        </>
    )
};

export default Cart;