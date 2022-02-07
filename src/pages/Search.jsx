//idea from from moralis boilerplate
// import React from "react";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from 'axios';



const Search = () => {
    // function App(){
    //     const[photos, setphoto] =useState("");
    //     const[clientId, setClientId] = useState("NEPYCg-jlQ3k0e-su3cMfr9rg402ltY_fxoroqXz9PQ");
    
    //     function handleChange(event){
    //         setPhoto(event.target.value);
    //     }
    //    function handleSubmit(event){
    //        console.log(photo);

    //       axios.get()
    //    }

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
                            <option value="user_account">User Account</option>
                        </select>
                    </div>
                    <p className="search-btn"><a href="https://opensea.io/MutantApeYachtClub?tab=created">Search</a></p>
                   
                </div>
            </div>
        </>
    );
};

export default Search;
