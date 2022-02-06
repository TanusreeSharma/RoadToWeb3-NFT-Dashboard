 import React from "react";
//  import Items from "./Items";
 import { useNavigate } from "react-router-dom";
 

const MyNFTCollection = () => {
    
//     return( 
//         <>
//         <h3>My NFT Collection</h3>
       
//         <Items/>
//         </>
//     );
// }
const navigate = useNavigate();
return (
    <div className="nft-item">
        <div className="image">
         <ul><li><img src="./images/pic1.png" alt="image" />
           <h3>Leggenda #139</h3>
            {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, labore?</p> */}
            {/* <button
                className="item-btn"
                onClick={() => {
                    navigate("/nfttest");
                }}
            >
                visit
            </button> */}
</li>

<li><img src="./images/pic3.png" alt="image" />
           <h3>Leggenda #361</h3>
            {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, labore?</p> */}
            {/* <button
                className="item-btn"
                onClick={() => {
                    navigate("/nfttest");
                }}
            >
                visit
            </button> */}
</li>

</ul>
            
        
        </div>
    </div>



);
};

export default MyNFTCollection;
