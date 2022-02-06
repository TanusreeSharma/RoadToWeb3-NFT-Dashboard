import React from "react";

const NFTTest = ({handleCompareClick}) => {

    return (
        <div className="nft-test-container">
            <div className="image-container">
                <img alt="image" src="./images/img-m.jpeg"/>
            </div>
            <div className="description-container">
                <h3>Description</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus corporis consequuntur quis cupiditate ea hic ipsum modi nihil, quibusdam eos.</p>
                <p className="compare" onClick={handleCompareClick}>COMPARE</p>
            </div>
        </div>
    );
}

export default NFTTest;