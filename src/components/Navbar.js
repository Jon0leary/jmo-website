import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../images/LOGO.png';
import { ReactComponent as HomeIcon } from '../images/navbar-icons/Home-Image.svg';
import { ReactComponent as PortfolioIcon } from '../images/navbar-icons/Portfolio-Image.svg';
import { ReactComponent as GamesIcon } from '../images/navbar-icons/Games-Image.svg';

function Navbar() {
    const [activeTab, setActiveTab] = useState("Main");

    // Simple switch case to change color of the Navbar
    const getBannerColor = () => {
        switch (activeTab) {
            case "Portfolio":
                return "#1B467B";
            case "Games":
                return "#2487B4";
            default:
                return "#0B0A45";
        }
    };

    return (
        <>
            <header className="navbar-header" style={{ backgroundColor: getBannerColor() }}>
                <div className="logo">
                    <img className="logo-image" src={Logo} alt="JMO Productions Logo" />
                    <div className="logo-text">
                        <span className="logo-jmo">JOMO</span>
                        <span className="logo-productions">Software</span>
                    </div>
                </div>
            </header>

            <nav className="navbar">
                <ul className="navbar-tabs">
                    <li className={`tab tab-main ${activeTab === "Main" ? "active" : ""}`} style={{ zIndex: activeTab === "Main" ? 3 : 1 }}>
                        <Link to="/" onClick={() => setActiveTab("Main")}>
                            <span className="nav-text">Main</span>
                            <HomeIcon className="nav-icon" />
                        </Link>
                    </li>
                    <li className={`tab tab-portfolio ${activeTab === "Portfolio" ? "active" : ""}`} style={{ zIndex: activeTab === "Portfolio" ? 3 : 2 }}>
                        <Link to="/portfolio" onClick={() => setActiveTab("Portfolio")}>
                            <span className="nav-text">Portfolio</span>
                            <PortfolioIcon className="nav-icon" />
                        </Link>
                    </li>
                    <li className={`tab tab-games ${activeTab === "Games" ? "active" : ""}`} style={{ zIndex: activeTab === "Games" ? 3 : 1 }}>
                        <Link to="/games" onClick={() => setActiveTab("Games")}>
                            <span className="nav-text">Games</span>
                            <GamesIcon className="nav-icon" />
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;