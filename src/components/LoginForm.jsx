import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import postLogin from "../api/postLogin";
import useAuth from "../hooks/use-auth";
import "./Form.css";

function LoginForm() {
    const navigate = useNavigate();
    const { auth, setAuth } = useAuth();

    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (credentials.username && credentials.password) {
            postLogin(
                credentials.username,
                credentials.password
            ).then((response) => {
                window.localStorage.setItem("token", response.token);
                setAuth({
                    token: response.token,
                });
                navigate("/");
            });
        }
    };

    return (
        <form>
            <h1>Login</h1>
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
        </form>
    );
}

export default LoginForm;
