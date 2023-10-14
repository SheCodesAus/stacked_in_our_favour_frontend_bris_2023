import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth.js';

import './NavBar.css';
import '../pages/HomePage.css';

import winstackdesktop from '../img/winstackdesktop.png'
import winstackmobile from '../img/winstackmobile.png'

function NavBar() {
    const { auth, setAuth } = useAuth();
    console.log("AUTH TOKEN in NavBar:", auth.token);

    const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = () => {
        window.localStorage.removeItem("token");
        setAuth({ token: null });
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

    return (
        <div>
            {/* NavBar Desktop View */}
            {!isMobileView && (
                <div id="nav-bar">
                    <Link to="/" className="navbar-logo-link">
                        <img src={winstackdesktop} alt="WinStack Logo" className="navbar-logo" />
                    </Link>
                    <nav className="desktop-nav">
                        <Link to="/" className="home-link">Home</Link>
                        <Link to="/users" className="signup-link">Join WinStack</Link>
                        <Link to="/users" className="register-link">Unregistered</Link>
                        <Link to="/events" className="createevent-link">Create Event</Link>
                        <Link to="/stickies" className="createsticky-link">Create Sticky</Link>
                        {auth.token ? (
                            <Link to="/" onClick={handleLogout} className="logout-button">Logout</Link>
                            ) : (
                            <Link to="/login" id="login-link">Login</Link> 
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
                    <Link to="/" className="navbar-logo-link">
                        <img src={winstackmobile} alt="WinStack Logo" className="navbar-logo" />
                    </Link>
                    <nav className="mobile-nav">
                        <Link to="/" className="home-link">Home</Link>
                        <Link to="/users" className="signup-link">Join WinStack</Link>
                        <Link to="/users" className="register-link">Unregistered</Link>
                        <Link to="/events" className="createevent-link">Create Event</Link>
                        <Link to="/stickies" className="createsticky-link">Create Sticky</Link>
                        {auth.token ? (
                            <Link to="/" onClick={handleLogout} className="logout-button">Logout</Link>
                            ) : (
                            <Link to="/login" id="login-link">Login</Link> 
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


// NavBar links: .home-link, .signup-link, .register-link, .createevent-link, .createsticky-link, #login-link,