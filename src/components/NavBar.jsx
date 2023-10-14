import { Link, Outlet } from "react-router-dom";
import Logo from "../img/logo-desktop.png";
// import "./NavBar.css";
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
    <nav>
        <div>
            <div className='logo'>
                <img src={Logo} alt="Logo" />
            </div>
                    <li>
                            <Link to="/events">Events</Link>
                            <Link to="/login">Login</Link>
                            <Link to="/">Logout</Link>
                            <Link to="/register">Register</Link> 
                    </li>  
            </div>   
        <Outlet /> 
    </nav>
    );
    }

export default NavBar;