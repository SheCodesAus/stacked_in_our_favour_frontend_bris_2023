import { Link, Outlet } from "react-router-dom";
import Logo from "../img/logo-desktop.png";
import "./NavBar.css";

import "@fontsource/roboto"; // Defaults to weight 400
import "@fontsource/roboto/400.css"; // Specify weight
import "@fontsource/roboto/400-italic.css"; // Specify weight and style

// import useAuth from "../hooks/use-auth.js";
// import Logo from '../img/logo-desktop.png'

// this is a comment
function NavBar() {

    // const {auth, setAuth} = useAuth();
    // const handleLogout = () => {
    //     window.localStorage.removeItem("token");
    //     setAuth({ token: null });
    // };
    return (
        <nav class="header">
            <img id="logo" src={Logo} alt="Logo" />
            <ul id="navlist">
                <li>
                    <Link to="/events">Events</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/">Logout</Link>
                    <Link to="/register">Register</Link>
                </li>
            </ul>
           {/* <Outlet /> */}
        </nav>
    );
}

export default NavBar;