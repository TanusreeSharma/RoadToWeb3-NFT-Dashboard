import React from "react";
import Ripples from "react-ripples";

const TabNavigation = ({ handleMyNFTCollection, handleMyNFTWatchlist, handleNFTCollection, activeTab }) => {
    let myNftCollectionClassName = "tab-list-item my-nft-collection";
    let myNftWatchlistClassName = "tab-list-item my-nft-watchlis";
    let nftCollectionClassName = "tab-list-item  nft-collection";

    if (activeTab === "MY_NFT_COLLECTION") {
        myNftCollectionClassName += " active";
    }
    if (activeTab === "NFT_WATCHLIST") {
        myNftWatchlistClassName += " active";
    }
    if (activeTab === "NFT_COLLECTION") {
        nftCollectionClassName += " active";
    }

    return (
        <div className="tab-navigation">
            <ul className="tab-list">
                <Ripples>
                    <button className={myNftCollectionClassName} onClick={handleMyNFTCollection}>
                        My NFT Collection
                    </button>
                </Ripples>

                <Ripples>
                    <button className={myNftWatchlistClassName} onClick={handleMyNFTWatchlist}>
                        My Favorite NFT
                    </button>
                </Ripples>

                <Ripples>
                    <button className={nftCollectionClassName} onClick={handleNFTCollection}>
                        NFT collection 
                    </button>
                </Ripples>
            </ul>
        </div>
    );
};

export default TabNavigation;
