import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import postLogin from "../api/postLogin";
import useAuth from "../hooks/use-auth";
import "./LoginForm.css";

function LoginForm() {    
    const navigate = useNavigate();
    const {auth, setAuth} = useAuth();    
    
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
    
    const handleSubmit = async (event) => {        
        event.preventDefault();        
        if (credentials.username && credentials.password) {            
            try {
                const response = await postLogin(credentials.username, credentials.password);
                window.localStorage.setItem("token", response.token);
                setAuth({ token: response.token });
                navigate("/");
            } catch (error) {
                console.error("Login error:", error.message);
            }
        }    
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h1>Login</h1>
                <label htmlFor="username">Username:</label>
                <input 
                    type="text" 
                    id="username" 
                    placeholder="Enter username"
                    onChange={handleChange}
                />  
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input 
                    type="password" 
                    id="password" 
                    placeholder="Enter password" 
                    onChange={handleChange}
                />      
            </div>
            <button type="submit">Login</button>
            <Link to="/register">Register</Link>
        </form>
    );
}

export default LoginForm;
