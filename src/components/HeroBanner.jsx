import React from "react";
import { useNavigate } from "react-router-dom";
const HeroBanner = () => {

    let navigate = useNavigate();
    return (
        <div className="hero-banner">
//              <div className="image-container">
//                 <img src="./images/nft1.png" alt="toolbox"/>
//             </div> 
            <div className="text-container">
                <p className="heading"> Tools to Personalize NFT users Discovery in Cross-Chain Marketplace</p>
                <div className="login-container">
                    <p>Log in</p>
                    <span> Sign in Wallet with Wallet</span>
                    <p className="login-btn" onClick={()=>navigate("/dashboard")}> METAMASK LOGIN</p>
                </div>
            </div>
        </div>
    );
}

export default HeroBanner;
