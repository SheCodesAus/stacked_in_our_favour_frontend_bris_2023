import { Link, Outlet, useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import logoDesktop from "../img/logoDesktop.png";
import logoMobile from "../img/logoMobile.png";
import "./NavBar.css";

let setLoginState;

function NavBar() {
    const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    setLoginState = (state) => {
        setIsLoggedIn(state);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        window.location.href = '/';
    };

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

    useEffect(() => {
        setIsLoggedIn(localStorage.getItem("token") !== null);
    }, []);

    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <div>
            {!isMobileView && (
                <div id="nav-bar">
                    <Link to="/" className={`navbar-logo-link ${isActive('/')}`}>
                        <img src={logoDesktop} alt="WinStack Logo" className="navbar-logoDesktop" />
                    </Link>
                    <nav className="desktop-nav">
                        {isLoggedIn ? (
                            <>
                                <Link to="/" className={`home-link ${isActive('/')}`}>Home</Link>
                                <Link to="/events" className={`events-link ${isActive('/events')}`}>Events</Link>
                                <Link to="/" className={`logout-link ${isActive('/')}`} onClick={handleLogout}>Logout</Link>
                            </>
                        ) : (
                            <>
                                <Link to="/register" className={`register-link ${isActive('/register')}`}>Register</Link>
                                <Link to="/login" className={`login-link ${isActive('/login')}`}>Login</Link>
                            </>
                        )}
                    </nav>
                </div>
            )}
            {isMobileView && (
                <div id="nav-bar" className={isMenuOpen ? "mobile-menu-open" : ""}>
                    <div className="menu-icon" onClick={toggleMenu}>
                        &#9776;
                    </div>
                    <Link to="/events" className={`navbar-logo-link ${isActive('/events')}`}>
                        <img src={logoMobile} alt="WinStack Logo" className="navbar-logoMobile" />
                    </Link>
                    <nav className="mobile-nav">
                        {isLoggedIn ? (
                            <>
                                <Link to="/" className={`home-link ${isActive('/')}`}>Home</Link>
                                <Link to="/events" className={`events-link ${isActive('/events')}`}>Events</Link>
                                <Link to="/" className={`logout-link ${isActive('/')}`} onClick={handleLogout}>Logout</Link>
                            </>
                        ) : (
                            <>
                                <Link to="/register" className={`register-link ${isActive('/register')}`}>Register</Link>
                                <Link to="/login" className={`login-link ${isActive('/login')}`}>Login</Link>
                            </>
                        )}
                    </nav>
                </div>
            )}
            <div className="content-container">
                <Outlet />
            </div>
        </div>
    );
}

export { NavBar as default, setLoginState };
