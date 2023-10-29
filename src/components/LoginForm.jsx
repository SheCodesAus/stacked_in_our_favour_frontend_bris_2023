import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import postLogin from "../api/postLogin";
import useAuth from "../hooks/use-auth";
import stickyImage from "../assets/stickyImage.svg"
import "./LoginForm.css"
import "./Form.css";
import stickyImage from "../assets/stickyImage.svg";


function LoginForm() {
    const navigate = useNavigate();
    const { auth, setAuth } = useAuth();

    console.log('Is user logged in?', window.localStorage.getItem("token") !== null);

    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });
    const [errorMessage, setErrorMessage] = useState("");  // State for the error message

    const handleChange = (event) => {
        const { id, value } = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }));
        setErrorMessage("");  // Clear error messages when user types
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if (credentials.username && credentials.password) {
            postLogin(
                credentials.username,
                credentials.password
            ).then((response) => {
                window.localStorage.setItem("token", response.token);
                window.localStorage.setItem("username", credentials.username);  // Store username
                setAuth({
                    token: response.token,
                });
                navigate("/");
            }).catch((error) => {
                setErrorMessage(error.message);  // Set the error message
            });
        }
    };
    

    return (
        <form className="login-register-form">
            <div className="form-block-text">
            <h1>Login</h1>
            {errorMessage && <div className="error-message">{errorMessage}</div>}  {/* Display the error message */}
            <div className="input-styling">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    placeholder="Enter username"
                    onChange={handleChange}
                />
            </div>
            <div className="input-styling">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Enter password"
                    onChange={handleChange}
                />
            </div>
            <div className="input-styling">
                <button type="submit" onClick={handleSubmit}><span>Login</span></button>
            </div>
            </div>
            <div classname="form-block-image">
                <img src={stickyImage} />
            </div>
        </form>
    );
    // return (
    //     <>
    //         <div className="home-block">
    //             <div className="home-block-text">
    //                 <h1>
    //                     Celebrate WINS during your{" "}
    //                     <span style={{ color: PurpleText.color }}>SHE</span>
    //                     <span style={{ color: YellowText.color }}>&#123;CODES&#125;</span> workshops.
    //                 </h1>
    //                 <h2 style={{ marginTop: "24px" }}>
    //                     Share successes with your peers and mentors before, during and after workshop events!
    //                 </h2>
    //             </div>
    //             <div
    //                 className={`home-block-image ${
    //                     isMobileView ? "mobile-view" : "desktop-view"
    //                 }`}
    //             >
    //                 <img
    //                     src={stickyImage}
    //                     alt="Illustration of people posting sticky notes onto a board."
    //                     className={`shrink-image ${isMobileView ? "disappear" : ""}`}
    //                 />
    //             </div>
    //         </div>
    //         <PromoteBanner isMobileView={isMobileView} />
    //     </>
    // );
}

export default LoginForm;
