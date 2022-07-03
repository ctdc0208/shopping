import React from "react";
import "./Footer.css"

class Footer extends React.Component {    
    render() {
        return (
            <footer>
                <div class="flexdiv">
                    <div>
                        <p>About Uniqlo</p>
                        <p>Information</p>
                        <p>Store Locator</p>
                    </div>
                    <div>
                        <p>Help</p>
                        <p>FAQ</p>
                        <p>Return Policy</p>
                        <p>Privacy Policy</p>
                        <p>Accessibility</p>
                    </div>
                    <div>
                        <p>Account</p>
                        <p>Membership</p>
                        <p>Profile</p>
                        <p>Coupons</p>
                    </div>
                    <div>
                        <p>E-Newsletter</p>
                        <p>Sign up and be the first-in-the know about new arrivals, promotions, in-store events and more.</p>
                        <p class="subscribe">SUBSCRIBE NOW</p>
                    </div>
                    <div>
                        <p>UNIQLO Social Account</p>
                        <div id="social-icons">
                            
                        <a href="https://www.facebook.com/uniqloin/">Facebook</a> 
                        <a href="https://twitter.com/uniqloin">Twitter</a> 
                        <a href="https://www.instagram.com/uniqloin/">Instagram</a> 
                        <a href="https://www.youtube.com/c/UniqloIn">Uniqlo</a> 
                        </div>
                    </div>
                </div>
                <div>
                    <div class="lang">English</div>
                </div>
                <div class="underline">
                    <div>
                        <p>
                        COPYRIGHT © UNIQLO CO., LTD. ALL RIGHTS RESERVED.
                    </p>
                    </div>
                    <div>
                        <p><span> Terms of use  </span><span>  Privacy policy </span></p>
                    </div>
                </div>
            </footer>
        )
    }
};


export default Footer