//idea from from moralis boilerplate
import React from "react";
import Navbar from "../components/Navbar";
const Search = () => {
    return (
        <>
            <Navbar isLoggedIn={true} />
            <div className="container">
                <h3>Search</h3>
                <div className="input-field-container">
                    <input type="text" placeholder="Enter Text related to an NFT" />

                    <div className="search-dropdown">
                        <select name="types" id="types">
                            <option value="nft_text_search">NFT Text Search</option>
                            <option value="image_search_by_url">Image Search By URL</option>
                            <option value="nft_counterfeit_detection">NFT Counterfeit Detection</option>
                            <option value="user_account">User Account</option>
                        </select>
                    </div>
                    <p className="search-btn">Search</p>
                </div>
            </div>
        </>
    );
};

export default Search;
