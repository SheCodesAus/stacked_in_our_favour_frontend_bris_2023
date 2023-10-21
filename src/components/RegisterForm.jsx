import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import postRegister from "../api/postRegister";  // Change this to your registration API function
import useAuth from "../hooks/use-auth.js";
import "./Form.css";

function RegisterForm() {
    const navigate = useNavigate();
    const { auth, setAuth } = useAuth();
    const [errorMessage, setErrorMessage] = useState("");  // State to hold error messages

    const [credentials, setCredentials] = useState({
        email: "",
        username: "",
        password: "",
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }));
        setErrorMessage("");  // Clear error messages when user types    
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (credentials.email && credentials.username && credentials.password) {
            try {
                const response = await postRegister(
                    credentials.email,
                    credentials.username,
                    credentials.password
                );
                window.localStorage.setItem("token", response.token);
                setAuth({
                    token: response.token,
                });
                navigate("/");
            } catch (error) {
                setErrorMessage(error.message);
                console.error("Registration error:", error.message);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Register</h1>
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
                />
            </div>
            <div className="input-styling">
                <button type="submit"><span>Register</span></button>
            </div>
            <a href="/login" className="style-a">Login</a>
        </form>
    );
}

export default RegisterForm;

