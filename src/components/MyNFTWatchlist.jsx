import React from "react";
import Items from "./Items";
import { useNavigate } from "react-router-dom";

const MyNFTWatchlist = () => {
//     return (
//         <>
//         <h3>My NFT Watchlist</h3>
//         <Items/>
//         </>
//     );
// }
const navigate = useNavigate();
return (
    <div className="nft-item">
        <div className="image">
         <ul><li><img src="./images/img-m.jpeg" alt="image" />
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
</li>

<li><img src="./images/img-m.jpeg" alt="image" />
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
</li>
<li><img src="./images/img-m.jpeg" alt="image" />
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
</li>
<li><img src="./images/img-m.jpeg" alt="image" />
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
</li>

<li><img src="./images/img-m.jpeg" alt="image" />
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
</li>

<li><img src="./images/img-m.jpeg" alt="image" />
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
</li>
</ul>
            
        
        </div>
    </div>



);
};


export default MyNFTWatchlist;