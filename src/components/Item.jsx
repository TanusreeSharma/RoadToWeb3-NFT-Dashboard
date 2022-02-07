import React from "react";
import { useNavigate } from "react-router-dom";

const Item = () => {
    const navigate = useNavigate();
    return (
        <div className="nft-item">
            <div className="image">
                <img src="./images/img-m.jpeg" alt="image" />
            </div>
            <div className="description">
                <h3>Lorem, ipsum.</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, labore?</p>
                <button
                    className="item-btn"
                    onClick={() => {
                        navigate("/nfttest");
                    }}
                >
                    visit
                </button>
            </div>
        </div>
    );
};

export default Item;
