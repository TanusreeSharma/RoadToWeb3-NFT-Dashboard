import React from "react";
import { useNavigate } from "react-router-dom";
import WalletCard from './WalletCard';

const HeroBanner = () => {

    let navigate = useNavigate();
    return (
        <div className="hero-banner">
             <div className="image-container">
                <img src="./images/nft4.png" alt="toolbox"/>
            </div> 
            <div className="text-container">
                <p className="heading"> Personalize NFT users Discovery in Cross-Chain Marketplace</p>
                <div className="login-container">
              
                    <p className="login-btn" onClick={()=>navigate("/dashboard")}> PERSONALIZED DASHBOARD</p>
                    <WalletCard/>
                   
                </div>
            </div>
        </div>
    );
}

export default HeroBanner;