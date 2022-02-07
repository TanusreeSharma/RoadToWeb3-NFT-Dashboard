import React from "react";
import Items from "./Items";


const NFTCollection = () => {
        return (
        <>
    
        <h3>NFT Collection</h3>
        
        <div className="image">
         <ul><li><img src="./images/pic1.png" alt="image" />
           <h3>Leggenda #139</h3>

</li>

<li><img src="./images/pic3.png" alt="image" />
           <h3>Leggenda #361</h3>

</li>
<li><img src="./images/pic5.png" alt="image" />
           <h3>Mutant Ape Yacht Club</h3>
            <p>#22185</p>
</li>

<li><img src="./images/pic6.png" alt="image" />
           <h3>Ape Island - Season 1</h3>
            <p>Strong Apery</p>
</li>

</ul>
<Items/>
            
        
        </div>
        </>
    );
}

export default NFTCollection;
