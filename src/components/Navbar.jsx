import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";

const Navbar = ({ isLoggedIn = false }) => {
    let navigate = useNavigate();

    return (
        <nav className="navbar">
            <div className="navbar-nav">
                <Logo />
                <div className="dropdown">
                    <select name="types" id="types">
                        <option value="ethereum_mainenet">Ethereum Mainenet</option>
                        <option value="ropsten_Testnet">Ropsten Testnet</option>
                        <option value="rinkeby_Testnet">Rinkeby Testnet</option>
                        <option value="polygon_Mainnet">Polygon Mainnet</option>
                    </select>
                </div>
                {isLoggedIn ? (
                    <ul className="nav-list">
                        <li className="nav-item">Home</li>
                        <li className="nav-item">Search</li>
                        <li className="nav-item" onClick={() => navigate("/")}>
                            Logout
                        </li>
                    </ul>
                ) : null}
            </div>
        </nav>
    );
};

export default Navbar;
