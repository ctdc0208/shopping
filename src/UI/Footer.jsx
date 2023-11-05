import React from "react";
import "./Footer.css"

class Footer extends React.Component {    
    render() {
        return (
            <div className="footer-container">
                <div className="logo">
                    Shopping
                </div>
                <div className="copyright">
                    © Shopping. All Rights Reserved.
                </div>
            </div>
        )
    }
};


export default Footer