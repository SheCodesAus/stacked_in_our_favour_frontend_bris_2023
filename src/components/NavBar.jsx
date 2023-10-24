import { Link, Outlet } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import logoMobile from "../img/logoMobile.png";
import logoDesktop from "../img/logoDesktop.png";

import "./NavBar.css";

import "@fontsource/roboto"; // Defaults to weight 400
import "@fontsource/roboto/400.css"; // Specify weight
import "@fontsource/roboto/400-italic.css"; // Specify weight and style

function NavBar() {
    const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Add isLoggedIn state

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div>
            {/* NavBar Desktop View */}
            {!isMobileView && (
                <div id="nav-bar">
                    <Link to="/events" className="navbar-logo-link">
                        <img src={logoDesktop} alt="WinStack Logo" className="navbar-logoDesktop" />
                    </Link>
                    <nav className="desktop-nav">
                        {isLoggedIn ? (
                            <>
                                <Link to="/events" className="events-link">
                                    Events
                                </Link>
                                <Link to="/" className="logout-link">
                                    Logout
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link to="/register" className="register-link">
                                    Register
                                </Link>
                                <Link to="/login" className="login-link">
                                    Login
                                </Link>
                            </>
                        )}
                    </nav>
                </div>
            )}

            {/* Unicode character for the menu icon */}
            {isMobileView && (
                <div id="nav-bar" className={isMenuOpen ? "mobile-menu-open" : ""}>
                    <div className="menu-icon" onClick={toggleMenu}>
                        &#9776;
                    </div>
                    <Link to="/events" className="navbar-logo-link">
                        <img src={logoMobile} alt="WinStack Logo" className="navbar-logoMobile" />
                    </Link>
                    <nav className="mobile-nav">
                        {isLoggedIn ? (
                            <>
                                <Link to="/events" className="events-link">
                                    Events
                                </Link>
                                <Link to="/" className="logout-link">
                                    Logout
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="login-link">
                                    Login
                                </Link>
                                <Link to="/register" className="register-link">
                                    Register
                                </Link>
                            </>
                        )}
                    </nav>
                </div>
            )}

            {/* Content Container */}
            <div className="content-container">
                <Outlet />
            </div>
        </div>
    );
}

export default NavBar;
