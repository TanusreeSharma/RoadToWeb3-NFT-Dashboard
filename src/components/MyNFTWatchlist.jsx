import React from "react";
// import Items from "./Items";
import { useNavigate } from "react-router-dom";

const MyNFTWatchlist = () => {

const navigate = useNavigate();
return (
    <div className="nft-item">
        <div className="image">
         <ul><li><img src="./images/pic5.png" alt="image" />
           <h3>Mutant Ape Yacht Club</h3>
            <p>#22185</p>
</li>

<li><img src="./images/p6.png" alt="image" />
           <h3>Ape Island - Season 1</h3>
            <p>Strong Apery</p>
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