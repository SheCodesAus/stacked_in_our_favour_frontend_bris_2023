import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

import './NavBar.css';
import '../pages/HomePage.css';

import winstackdesktop from '../img/logo-desktop.png'
import winstackmobile from '../img/logo-mobile.png'

function NavBar() {
    // const { auth, setAuth } = useAuth();
    // console.log("AUTH TOKEN in NavBar:", auth.token);

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
                        <Link to="/register" className="signup-link">Signup</Link>
                        <Link to="/profile" className="profile-link">Profile</Link>
                        <Link to="/event" className="newevent-link">New Event</Link>
                        <Link to="/stickyNotes" className="newsticky-link">New Sticky</Link>
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
                        <Link to="/register" className="signup-link">Signup</Link>
                        <Link to="/profile" className="profile-link">Profile</Link>
                        <Link to="/event" className="newevent-link">New Event</Link>
                        <Link to="/stickyNotes" className="newsticky-link">New Sticky</Link>
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


// NavBar links: .home-link, .signup-link, .profile-link, .newevent-link, .newsticky-link, #login-link,