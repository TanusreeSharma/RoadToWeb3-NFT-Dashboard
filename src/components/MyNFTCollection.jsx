import React from "react";
import { useNavigate } from "react-router-dom";




const MyNFTCollection = () => {


const navigate = useNavigate();
return (
    <div className="nft-item">
        <div className="image">
         <ul><li><img src="./images/pic1.png" alt="image" />
           <h3>Leggenda #139</h3>

</li>

<li><img src="./images/pic3.png" alt="image" />
           <h3>Leggenda #361</h3>

</li>

</ul>
            
        
        </div>
    </div>



);
};

export default MyNFTCollection;
